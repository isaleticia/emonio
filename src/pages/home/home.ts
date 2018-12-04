import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController) {
    bluetoothSerial.enable();
  }



  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then((success) => {
      this.unpairedDevices = success;
      this.gettingDevices = false;
      success.forEach(element => {
        // alert(element.name);
      });
    },
      (err) => {
        console.log(err);
      })

    this.bluetoothSerial.list().then((success) => {
      this.pairedDevices = success;
    },
      (err) => {

      })
  }
  success = (data) => alert(data);
  fail = (error) => alert(error);

  selectDevice(address: any) {

    let alert = this.alertCtrl.create({
      title: 'Connect',
      message: 'Wollen Sie sich mit diesem Gerät verbinden?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(this.success, this.fail);
          }
        }
      ]
    });
    alert.present();

  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: 'Disconnect',
      message: 'Wollen Sie die Verbindung aufgeben?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }
}
