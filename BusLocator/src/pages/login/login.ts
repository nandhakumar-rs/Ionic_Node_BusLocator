import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AuthService } from '../../service/authService';
import { DriverPage } from '../driver/driver';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,private toast:ToastController,public navParams: NavParams,public nav:NavController,private auth:AuthService) {
  }
login(form:NgForm){

this.auth.login(form.value.email,form.value.password).subscribe((data)=>{
  localStorage.setItem("token",data.token)
  localStorage.setItem("userid",data.userid)
  localStorage.setItem("role",data.role)
  if(this.auth.getuserrole()== 'driver'){
    this.nav.setRoot(DriverPage)
  }else if(this.auth.getuserrole()== 'student'){
    this.nav.setRoot(HomePage)
  }else{
this.toast.create({
  message:data.message
}).present();
  }
  
})
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
register(){
this.nav.push(RegisterPage)
}
}
