import { HomePage } from './../home/home';
import { BLE } from '@ionic-native/ble';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  device = [];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ble: BLE,
              public toastCtrl: ToastController,
              private ngZone: NgZone) {



    let device = navParams.get('device');
    //this.setStatus('Connecting to ' + device.name || device.id);

    this.ble.connect(device.id).subscribe(
      device =>this.onConnected(device),
      device => this.onDisconnected(device)

    );

}

onConnected(device) {
     this.ngZone.run(() => {
       this.device= device;
     });
    }

    onDisconnected(device) {
    console.log(`Disconnected from ${device.id}`)
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  /* ionViewWillLeave(){
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.device.id).then(
      () => console.log('Disconnected'),
      () => console.log('ERROR disconnecting')
    )
  } */


  goToHomePage(){
    this.navCtrl.push(HomePage)
  }

}
