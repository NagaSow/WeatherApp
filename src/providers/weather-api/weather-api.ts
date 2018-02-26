import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AppConstantsProvider } from '../app-constants/app-constants';
import "rxjs/add/operator/map";

/*
  Generated class for the WeatherApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherApiProvider {
weatherURL:string;
private constantVar:any;
  constructor(private http:Http, constantVar:AppConstantsProvider) {
    console.log('Hello WeatherApiProvider Provider');
    this.constantVar=constantVar;
    this.weatherURL=constantVar.getForecastURL();


  }
  getCurrentWeather(longitude:any,latitude:any){
    return this.http.get(this.weatherURL+latitude+","+longitude).map(res=>res.json())

  }
  getGeometry(googleAPIURL:any,location:any){
return this.http.get(googleAPIURL+"'"+location+"").map(res=>res.json())
  }
}
