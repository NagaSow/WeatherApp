import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms/src/model';
// import { FormBuilder } from '@angular/forms/src/form_builder';
import { AppConstantsProvider } from "../../providers/app-constants/app-constants";
import { WeatherApiProvider } from "../../providers/weather-api/weather-api";
// import { Validators } from '@angular/forms/src/validators';

import { FormBuilder, Validators} from '@angular/forms';
// import { Validators } from '@angular/forms/src';


/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers:[AppConstantsProvider,WeatherApiProvider],

})
export class WeatherPage {

  weatherForm: FormGroup;
  private appConstants:any;
  private Weather:any;
  private geometry:any;
  private currentWeather:any;
  weatherResult :boolean;
  summaryIcon:string;

  constructor(private navCtrl: NavController, private fb: FormBuilder,appConstants:AppConstantsProvider,WeatherApi:WeatherApiProvider) {

this.weatherForm=fb.group({
  'location':['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z,]*'),Validators.minLength(3),Validators.maxLength[100]])]
});
this.appConstants=appConstants;
this.Weather=WeatherApi;
this.geometry={"longitude":"","latitude":""};
this.currentWeather={};
this.weatherResult=false;
this.summaryIcon="";

  }

  getWeather(formData:any){
    this.Weather.getGeometry(
      
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
