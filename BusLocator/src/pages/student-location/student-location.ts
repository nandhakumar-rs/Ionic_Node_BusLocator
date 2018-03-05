import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../../service/authService';

/**
 * Generated class for the StudentLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-location',
  templateUrl: 'student-location.html',
})
export class StudentLocationPage implements OnInit{
  busno:any;
  latitude:any;
  longitude:any;
  age:any;
  name:any;
  starttime:any;
  identity:any

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentLocationPage');
  }
  ngOnInit(): void {
    this.busno = this.navParams.get('busno')

    this.auth.getbusdetails(this.busno).subscribe(data=>{
      this.age = data.age;
      this.longitude = data.longitude;
      this.latitude = data.latitude
      this.name =  data.name;
      this.starttime = data.starttime;
      this.identity = data.identityno;
    })




  }


}
