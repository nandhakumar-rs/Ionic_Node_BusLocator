import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AuthService } from '../service/authService';
import {HttpModule}  from '@angular/http'
import { DriverPage } from '../pages/driver/driver';
import { LocationPage } from '../pages/location/location';
import { StudentLocationPage } from '../pages/student-location/student-location';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,RegisterPage,
    DriverPage,LocationPage,
    StudentLocationPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARLFLhp39oDBEOaW7j_oYQi9nZ7TA380Y'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DriverPage,LocationPage,
    StudentLocationPage
    
  ],
  providers: [
    AuthService,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
