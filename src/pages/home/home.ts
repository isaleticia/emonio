import { DetailPage } from './../detail/detail';
import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';
import { ThingsboardPage } from './../thingsboard/thingsboard';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { InfopagePage } from './../infopage/infopage';
import { SettingsPage } from './../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  devices: any[] = [];

  constructor(public navCtrl: NavController,
              private ble: BLE,
              private ngZone: NgZone,
              public ToastController: ToastController,
              private theInAppBrowser: InAppBrowser) {
  }

  ionViewDidEnter() { ////scan() wird ausgeführt, wenn seite aufgerufen wird
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() { // scannt nach BLE-Geräten bis timeout erreicht ist
    this.devices = [];

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => alert("scan error")
    );

   setTimeout(5000);
  }

  onDeviceDiscovered(device) { //aufgerufen, wenn Gerät gefunden wurde - gibt GeräteInfos zurück
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  deviceSelected(device){
    console.log(JSON.stringify(device) + ' selected ');
    this.navCtrl.push(DetailPage, {
      device: device
    });
  }

  goToDetailPage() {
    this.navCtrl.push(DetailPage);
  }

  goToThingsboard(){
     this.navCtrl.push(ThingsboardPage);
  }

  goToInfoPage(){
    this.navCtrl.push(InfopagePage);
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  options : InAppBrowserOptions = {
  location : 'yes',//Or 'no'
  hidden : 'no', //Or  'yes'
  clearcache : 'yes',
  clearsessioncache : 'yes',
  zoom : 'yes',//Android only ,shows browser zoom controls
  hardwareback : 'yes',
  mediaPlaybackRequiresUserAction : 'no',
  shouldPauseOnSuspend : 'no', //Android only
  closebuttoncaption : 'Close', //iOS only
  disallowoverscroll : 'no', //iOS only
  toolbar : 'yes', //iOS only
  enableViewportScale : 'no', //iOS only
  allowInlineMediaPlayback : 'no',//iOS only
  presentationstyle : 'pagesheet',//iOS only
  fullscreen : 'yes',//Windows only
};

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
}
  public openWithInAppBrowser(url : string){
      let target = "_blank";
      this.theInAppBrowser.create(url,target,this.options);
  }
  public openWithCordovaBrowser(url : string){
      let target = "_self";
      this.theInAppBrowser.create(url,target,this.options);
  }




}
