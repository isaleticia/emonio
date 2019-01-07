import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
 selector: 'page-deviceInfo',
 templateUrl: 'deviceInfo.html',
})
export class DeviceInfoPage {

manu:any;
sysid:any;
pnpid:any;
cert:any;
softwarerevision:any;
firmware:any;
hardwarerevision:any;
serialnr:any;
modelnr:any;


 constructor(public navCtrl: NavController, public navParams: NavParams) {

   this.manu= this.navParams.data.manu;
   this.sysid=this.navParams.data.sysid;
   this.pnpid=this.navParams.data.pnpid;
   this.cert=this.navParams.data.cert;
   this.softwarerevision=this.navParams.data.softwarerevision;
   this.firmware=this.navParams.data.firmware;
   this.hardwarerevision=this.navParams.data.hardwarerevision;
   this.serialnr=this.navParams.data.serialnr;
   this.modelnr=this.navParams.data.modelnr;

 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad DeviceInfoPage');

 }

}
