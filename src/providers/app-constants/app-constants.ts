import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http } from "@angular/http";


/*
  Generated class for the AppConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppConstantsProvider {
googleAPIURL:string;
forecastURL:string;

  constructor(private http: Http) {
    console.log('Hello AppConstantsProvider Provider');
    this.googleAPIURL="https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAHq0Kjw7S1ZlMARKaJm_DL7aA1FMwgIb8";
    this.forecastURL="https://api.darksky.net/forecast/0456189770f27664f48c4c393535fb7b/37.8267,-122.4233";

  }

  getGoogleAPIURL(){
    return this.googleAPIURL;
  }

  getForecastURL(){
    return this.forecastURL;
  }

}
