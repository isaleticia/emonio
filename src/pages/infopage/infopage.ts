import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-infopage',
  templateUrl: 'infopage.html',
})
export class InfopagePage {

  memory:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfopagePage');
  }


}
