import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../service/authService';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserModel } from '../../models/user';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { LocationPage } from '../location/location';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Geolocation } from '@ionic-native/geolocation';
import { LoginPage } from '../login/login';

/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage implements OnInit{

user:UserModel;
name:any;
  constructor(public navCtrl: NavController,private alert:AlertController,private geo:Geolocation ,public navParams: NavParams,private auth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }
  ngOnInit(): void {
     this.auth.getuser().subscribe((data)=>{
      this.user =  data;
      this.name = this.user.name
      console.log(data)
    })
  }


drive(form:NgForm){

this.auth.checkbus(form.value.busno).subscribe(data=>{
  if(data.value == true){
    this.auth.startdriving(form.value.busno,form.value.starttime).subscribe(data=>{
      console.log(data)
      this.navCtrl.setRoot(LocationPage)
      })
  }
  else{
    this.alert.create({
      message:"bus already started choose some other bus",
      buttons:['Ok']
    }).present()
    console.log()
  }
})


}
logout(){
  this.auth.logout();
  this.navCtrl.setRoot(LoginPage)
}
}
