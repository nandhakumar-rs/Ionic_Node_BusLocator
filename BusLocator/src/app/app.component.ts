import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../service/authService';
import { HomePage } from '../pages/home/home';
import { DriverPage } from '../pages/driver/driver';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{


  

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth:AuthService) {
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  ngOnInit(): void {
    if(this.auth.isUser()){
      if(this.auth.getuserrole() == 'driver'){
       this.rootPage = DriverPage;
      }
      else{
       this.rootPage = HomePage;
      }
      
     }else{
       this.rootPage =   LoginPage;
     }
  }
  
}

