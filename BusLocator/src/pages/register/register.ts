import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/authService';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { UserModel } from '../../models/user';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user:UserModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alert:AlertController,private auth:AuthService,private toast:ToastController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

register(form:NgForm){
  this.auth.userExist(form.value.email).subscribe((data)=>{
    if(data == true){
   this.alert.create({
    title:"Warning", 
    message:"User already exist !!!",
buttons:['Ok']
   }).present();
    }
    else{
this.user = {
  email:form.value.email,
  password:form.value.password,
  name:form.value.name,
  age:form.value.age,
  identityno:form.value.idno,
  role:form.value.person

}

    this.auth.register(this.user).subscribe((data)=>{
 if (this.user.role == 'driver'){
   this.auth.addlocation(data.userid).subscribe(data1=>{
     this.auth.adddriver(data.userid).subscribe(data2=>{
       console.log(data2)
     })
   })
 }
 this.toast.create({
  message:"User registered Successfully !!!",
  duration:1500
})
this.navCtrl.setRoot(LoginPage)
    })

    }
  })
}
}
