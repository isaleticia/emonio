import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThingsboardPage } from './thingsboard';

@NgModule({
  declarations: [
    ThingsboardPage,
  ],
  imports: [
    IonicPageModule.forChild(ThingsboardPage),
  ],
})
export class ThingsboardPageModule {}
