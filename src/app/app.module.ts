import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {BLE} from '@ionic-native/ble';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { DeviceInfoPage } from '../pages/deviceInfo/deviceInfo';
import { CsvDetailPage } from '../pages/csvDetail/csvDetail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    DeviceInfoPage,
    CsvDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    DeviceInfoPage,
    CsvDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BLE,
    BluetoothSerial
  ]
})
export class AppModule {}
