import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { WeatherApiPage } from "../pages/weather-api/weather-api";
import { WeatherPage } from "../pages/weather/weather";
import { ForecastPage } from "../pages/forecast/forecast";
import { AppConstantsProvider } from '../providers/app-constants/app-constants';
import { HttpModule } from "@angular/http";
import { WeatherApiProvider } from '../providers/weather-api/weather-api';

@NgModule({
  declarations: [
    MyApp,
   
    WeatherApiPage,
    
    ForecastPage,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    WeatherApiPage,
   ForecastPage,
   WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppConstantsProvider,
    WeatherApiProvider
  ]
})
export class AppModule {}
