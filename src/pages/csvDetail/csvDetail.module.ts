import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CsvDetailPage } from './csvDetail';

@NgModule({
  declarations: [
    CsvDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CsvDetailPage),
  ],
})
export class CsvDetailPageModule {

}
