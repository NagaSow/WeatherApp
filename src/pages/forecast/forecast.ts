import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms/src/model';
// import { FormBuilder } from '@angular/forms/src/form_builder';
import { AppConstantsProvider } from "../../providers/app-constants/app-constants";
import { WeatherApiProvider } from "../../providers/weather-api/weather-api";
// import { Validators } from '@angular/forms/src/validators';

import { FormBuilder, Validators} from '@angular/forms';

/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
  providers:[AppConstantsProvider,WeatherApiProvider],
  
})


export class ForecastPage {
  forecastForm: FormGroup;
  private appConstants:any;
  private Weather:any;
  private geometry:any;
  private minWeather:number[][];
  private maxWeather:number[][];
  private weatherTime:any;
  // private currentWeather:any;
  weatherResult :boolean;
  summaryIcon:string;
  constructor(private navCtrl: NavController, private fb: FormBuilder,appConstants:AppConstantsProvider,WeatherApi:WeatherApiProvider) {

    this.forecastForm=fb.group({
      'location':['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z,]*'),Validators.minLength(3),Validators.maxLength[100]])],'forecast':'daily'
    });
    this.appConstants=appConstants;
    this.Weather=WeatherApi;
    this.geometry={"longitude":"","latitude":""};
    this.minWeather=new Array();
    this.maxWeather=new Array();
    this.weatherTime=new Array();
    this.weatherResult=false;
    this.summaryIcon="";
    
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}
