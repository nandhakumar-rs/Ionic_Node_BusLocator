import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { locationModel } from '../../models/location';
import { Geolocation } from '@ionic-native/geolocation';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DriverPage } from '../driver/driver';
import {Observable} from 'rxjs/Rx';
import { AuthService } from '../../service/authService';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage  implements OnInit{
  
  location:locationModel={
    latitude:0,
    longitude:0
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,public geo:Geolocation,private auth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  ngOnInit(): void {
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t => this.tickerFunc(t));

    
  }
  tickerFunc(tick){
    // this.geo.getCurrentPosition().then((data)=>{
      
    //     console.log(data)
    //     this.location.latitude = data.coords.latitude,
    //     this.location.longitude = data.coords.longitude
       
    
    // })



    this.location.latitude = 10.8102317;
    this.location.longitude = 77.0111902
 console.log(this.location.latitude,this.location.longitude )
 this.auth.updatelocation(this.location.latitude,this.location.longitude).subscribe(data=>{
   console.log(data)
 })
  }
  stopdriving(){
  this.auth.updatelog().subscribe((data)=>{
console.log(data)
this.navCtrl.setRoot(DriverPage)
  })
    
  }
}
