import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BLE } from '@ionic-native/ble/';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { DeviceInfoPage } from '../pages/deviceInfo/deviceInfo';
import { CsvDetailPage } from '../pages/csvDetail/csvDetail';
import { ThingsboardPage } from '../pages/thingsboard/thingsboard';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { InfopagePage } from '../pages/infopage/infopage';
import { SettingsPage } from '../pages/settings/settings';
import { LogPage } from '../pages/log/log';
import { FilesPage } from '../pages/files/files';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    DeviceInfoPage,
    CsvDetailPage,
    ThingsboardPage,
    InfopagePage,
    SettingsPage,
    LogPage,
    FilesPage

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
    CsvDetailPage,
    ThingsboardPage,
    InfopagePage,
    SettingsPage,
    LogPage,
    FilesPage
  ],
  providers: [
   StatusBar,
   SplashScreen,
   {provide: ErrorHandler, useClass: IonicErrorHandler},
   BLE,
   InAppBrowser
 ]
})
export class AppModule {}
