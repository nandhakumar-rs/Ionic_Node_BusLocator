import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLocationPage } from './student-location';

@NgModule({
  declarations: [
    StudentLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLocationPage),
  ],
})
export class StudentLocationPageModule {}
