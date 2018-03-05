import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../service/authService';
import { StudentLocationPage } from '../student-location/student-location';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController,private alert:AlertController,private auth:AuthService,private toast:ToastController) {


}

showlocation(i:Number){
  console.log(i)
  this.auth.checkbus(i).subscribe(data=>{
   
  if(data.value){
 this.alert.create({
   message:"Bus not Yet Started or has reached the College",
   buttons:['Ok']
 }).present()
  }else{
    this.navCtrl.push(StudentLocationPage,{'busno':i})
  }
    
   
  })
}
logout(){
  this.auth.logout();
  this.navCtrl.setRoot(LoginPage)
}
}
