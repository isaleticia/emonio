import { DeviceInfoPage } from './../deviceInfo/deviceInfo';
import { HomePage } from './../home/home';
import { BLE } from '@ionic-native/ble/';
import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CsvDetailPage } from '../csvDetail/csvDetail';
import { LogPage } from '../log/log';
import { SettingsPage } from '../settings/settings';
import { InfopagePage } from '../infopage/infopage';
import { FilesPage } from '../files/files';

// Emonio Bluetooth UUIDs
const SERVICE_UUID = 'E1C98240-3037-419A-AEA4-BD9CC9C49A61';
const WRITE_CHARACTERISTIC = '00000002-EBB1-4BDA-9EDF-D0F5F8A11181';
const RECEIVE_CHARACTERISTIC = '00000003-EBB1-4BDA-9EDF-D0F5F8A11181';
const RECEIVE_CSVDATA_CHARACTERISTIC = '00000004-EBB1-4BDA-9EDF-D0F5F8A11181';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

// converts a string to arraybuffer
  stringToBytes(string) {
     var array = new Uint8Array(string.length);
     for (var i = 0, l = string.length; i < l; i++) {
         array[i] = string.charCodeAt(i);
      }
      return array.buffer;
  }

// converts arraybuffer to string
  bytesToString(buffer) {
      return String.fromCharCode.apply(null, new Uint8Array(buffer));
  }

  @ViewChild('lineCanvas') lineCanvas;

  device = [];
  login = "login admin:emonio";
  energyCommando = "energy";
  download = "download" + this.device['name'] + "-01.csv";

  lineChart : any;
  data : any;
  csvFileData : any;
  vrms0 : any;
  irms0 : any;
  watt0 : any;
  var0 : any;
  va0 : any;
  freq0 : any;
  phi0 : any;
  vrms1 : any;
  irms1 : any;
  watt1 : any;
  var1 : any;
  va1 : any;
  freq1 : any;
  phi1 : any;
  vrms2 : any;
  irms2 : any;
  watt2 : any;
  var2 : any;
  va2 : any;
  freq2 : any;
  phi2 : any;

  meterWatt0 : any[] = [];
  meterWatt1 : any[] = [];
  meterWatt2 : any[] = [];

  csvFile: any;
  lines: any;
  result : any;
  headers: any;
  currentline: any;
  object : {};
  csvFileObject : any;

  timestamp:any;
  localtime:any;
  vrms_a:any;
  irms_a:any;
  connected_a :any;
  watt_a : any;
  kwh_a : any;
  timestamp_b:any;
  localtime_b:any;
  vrms_b:any;
  irms_b:any;
  connected_b :any;
  watt_b : any;
  kwh_b : any;
  timestamp_c:any;
  localtime_c:any;
  vrms_c:any;
  irms_c:any;
  connected_c :any;
  watt_c : any;
  kwh_c: any;

  hash : {};
  keys: any;
  values: any;

  manu : any;
  sysid : any;
  pnpid : any;
  cert : any;
  softwarerevision : any;
  firmware : any;
  hardwarerevision : any;
  serialnr : any;
  modelnr : any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ble: BLE,
              public toastCtrl: ToastController,
              private ngZone: NgZone) {


  let device = navParams.get('device');

    // connect to selected device
    this.ble.connect(device.id).subscribe(
    device =>this.onConnected(device),
    device => this.onDisconnected(device),

  );

}

   /*while connection is successfull:
   - writes egy commando to characteristic every 2 sec
   - reads & stores egy values for table visualization
   - subscribes to characteristic & stores mtr values then creates line chart
   */
 onConnected(device) {
   console.log(`Connected to ${device.id}`)
   this.ngZone.run(() => {
   this.device = device;
 });

   this.writeCommando(this.login);
   this.getEnergyDataEvery2Sec();
   this.subscribeToMsgCharacteristic();
   this.createLineChart();

   // write download commando read csv data - then convert csv to JSON and store values
   this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.download)).then(
    data => console.log ("write download commando" + this.bytesToString(data)));

    this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(
     buffer => {
     var data = new Uint8Array(buffer);
     console.log("status csv file (OK or ERROR): " + this.bytesToString(data));
     this.ngZone.run(() => {
       console.log(this.csvFile = this.bytesToString(data));
     });
   }
  )

  this.ble.read(device.id, SERVICE_UUID, RECEIVE_CSVDATA_CHARACTERISTIC).then(
  buffer => {
  this.csvFile = new Uint8Array(buffer);
   console.log("current CSV File: " + this.bytesToString(this.csvFile));
   this.ngZone.run(() => {
     console.log(this.csvFile = this.bytesToString(this.csvFile));

     this.csvFileObject = JSON.parse(this.csvJSON(this.csvFile));

      this.timestamp = this.csvFileObject[0].timestamp;
      this.localtime = this.csvFileObject[0].localtime;
      this.connected_a = this.csvFileObject[0].connected_a;
      this.vrms_a = this.csvFileObject[0].vrms_a;
      this.irms_a = this.csvFileObject[0].irms_a;
      this.watt_a = this.csvFileObject[0].watt_a;
      this.kwh_a = this.csvFileObject[0].kwh_a;

      this.timestamp_b = this.csvFileObject[1].timestamp;
      this.localtime_b = this.csvFileObject[1].localtime;
      this.connected_b = this.csvFileObject[1].connected_b;
      this.vrms_b = this.csvFileObject[1].vrms_b;
      this.irms_b = this.csvFileObject[1].irms_b;
      this.watt_b = this.csvFileObject[1].watt_b;
      this.kwh_b = this.csvFileObject[1].kwh_b;

      this.timestamp_c = this.csvFileObject[2].timestamp;
      this.localtime_c = this.csvFileObject[2].localtime;
      this.connected_c = this.csvFileObject[2].connected_b;
      this.vrms_c = this.csvFileObject[2].vrms_c;
      this.irms_c = this.csvFileObject[2].irms_c;
      this.watt_c = this.csvFileObject[2].watt_c;
      this.kwh_c = this.csvFileObject[2].kwh_c;

   });
  }
 )


 this.ble.read(device.id, '180A', '2A23').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.sysid = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A24').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.modelnr = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A25').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.serialnr = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A27').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.hardwarerevision = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A26').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.firmware = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A28').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.softwarerevision = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A29').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.manu = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A2A').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.cert = this.bytesToString(data);
   });
 }
)

this.ble.read(device.id, '180A', '2A50').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.pnpid = this.bytesToString(data);
   });
 }
)

 }

//writes to characteristic
 writeCommando(commando) {
  this.ble.write(this.device['id'], SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(commando)).then(
  data => console.log ("write commando" + this.bytesToString(data)));

}



//reads data if type is egy & stores each egy data value
readEnergyData() {

  this.ble.read(this.device['id'], SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(
    buffer => {
      try{
      this.data = JSON.parse(this.bytesToString(new Uint8Array(buffer)));
      if (this.data.type == "egy") {
      this.ngZone.run(() => {

        this.vrms0 = this.data.phase[0].vrms;
        this.irms0 = this.data.phase[0].irms;
        this.watt0 = this.data.phase[0].watt;
        this.var0 = this.data.phase[0].var;
        this.va0 = this.data.phase[0].va;
        this.freq0 = this.data.phase[0].freq;
        this.phi0 = this.data.phase[0].phi;

        this.vrms1 = this.data.phase[1].vrms;
        this.irms1 = this.data.phase[1].irms;
        this.watt1 = this.data.phase[1].watt;
        this.var1 = this.data.phase[1].var;
        this.va1 = this.data.phase[1].va;
        this.freq1 = this.data.phase[1].freq;
        this.phi1 = this.data.phase[1].phi;

        this.vrms2 = this.data.phase[2].vrms;
        this.irms2 = this.data.phase[2].irms;
        this.watt2 = this.data.phase[2].watt;
        this.var2 = this.data.phase[2].var;
        this.va2 = this.data.phase[2].va;
        this.freq2 = this.data.phase[2].freq;
        this.phi2 = this.data.phase[2].phi;
        console.log("egy data read: " + JSON.stringify(this.data));


      });
    }
    } catch(e){
        console.log("Parse Error read");

    }
    }
  )
}

//function to write egy commando to characteristic & read output - every 2 sec
 getEnergyDataEvery2Sec () {
   try {
   setInterval(() => {
   this.writeCommando(this.energyCommando);
   this.readEnergyData();
 }, 2000);
  }
    catch(e){
        console.log(" get egy data failed");

    }
 }

// subscribe for notifications when value changes
 subscribeToMsgCharacteristic() {
   this.ble.startNotification(this.device['id'], SERVICE_UUID, RECEIVE_CHARACTERISTIC).subscribe(
     buffer => {
       try{
       this.data = JSON.parse(this.bytesToString(new Uint8Array(buffer)));
       if (this.data.type == "egy") {
       this.ngZone.run(() => {

         this.vrms0 = this.data.phase[0].vrms;
         this.irms0 = this.data.phase[0].irms;
         this.watt0 = this.data.phase[0].watt;
         this.var0 = this.data.phase[0].var;
         this.va0 = this.data.phase[0].va;
         this.freq0 = this.data.phase[0].freq;
         this.phi0 = this.data.phase[0].phi;

         this.vrms1 = this.data.phase[1].vrms;
         this.irms1 = this.data.phase[1].irms;
         this.watt1 = this.data.phase[1].watt;
         this.var1 = this.data.phase[1].var;
         this.va1 = this.data.phase[1].va;
         this.freq1 = this.data.phase[1].freq;
         this.phi1 = this.data.phase[1].phi;

         this.vrms2 = this.data.phase[2].vrms;
         this.irms2 = this.data.phase[2].irms;
         this.watt2 = this.data.phase[2].watt;
         this.var2 = this.data.phase[2].var;
         this.va2 = this.data.phase[2].va;
         this.freq2 = this.data.phase[2].freq;
         this.phi2 = this.data.phase[2].phi;
         console.log("egy data n: " + JSON.stringify(this.data));


       });
     } else if (this.data.type == "mtr") {

       this.meterWatt0 = this.data.phase[0].watt;
       this.meterWatt1 = this.data.phase[1].watt;
       this.meterWatt2 = this.data.phase[2].watt;

      this.addData(this.lineChart, new Date().toLocaleTimeString());

       console.log("meter data n: " + JSON.stringify(this.data));
    }
     } catch(e){
         console.log("Parse Error notify");

     }
     }
   )
 }


//creates line chart with received mtr values
 createLineChart(){

  this.lineChart = new Chart(this.lineCanvas.nativeElement, {

   type: 'line',
   data: {
      // labels: [new Date()],
       datasets: [
           {
               label: "Phase A",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgb(255,0,0)",
               borderColor: "rgb(255,0,0)",
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: "rgb(255,0,0)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointRadius: 1,
               pointHitRadius: 10,
               data : [],
               spanGaps: true,
               showLine: true,
           },
           {
               label: "Phase B",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(22,93,246,1)",
               borderColor: "rgba(22,93,246,1)",
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: "rgba(22,93,246,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointRadius: 1,
               pointHitRadius: 10,
               data : [],
               spanGaps: false,
               showLine: true
           },
          {
               label: "Phase C",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgb(50,205,50)",
               borderColor: "rgb(50,205,50)",
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: "rgb(50,205,50)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: [],
               pointRadius: 1,
               pointHitRadius: 10,
               data : [],
               spanGaps: false,
               showLine: true
               }]
             },
           });
         }


// add values to all datasets & update chart
  addData(chart, label) {

    if (chart.data.labels.length < 4) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(this.meterWatt0);
    chart.data.datasets[1].data.push(this.meterWatt1);
    chart.data.datasets[2].data.push(this.meterWatt2);

    chart.update();
  } else if (chart.data.labels.length = 4){
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
    chart.data.datasets[1].data.shift();
    chart.data.datasets[2].data.shift();

    chart.update();
  }
}

//convert CSV to JSON
  csvJSON(csvFile){
    var lines=csvFile.split("\n");
    var result = [];
    var headers= ["timestamp","localtime","connected_a","vrms_a","irms_a","watt_a", "kwh_a", "connected_b", "vrms_b","irms_b","watt_b", "kwh_b", "connected_c", "vrms_c","irms_c","watt_c", "kwh_c" ]

    for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(";");

      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);

    }

    //return result; //JavaScript object
    console.log("HALLO JSON String : " + JSON.stringify(result));
     return JSON.stringify(result); //JSON

}

  onDisconnected(device) {
    console.log(`Disconnected from ${device.id}`)
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad DetailPage');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave disconnecting Bluetooth');
    this.ble.disconnect(this.device['id']).then(
      () => console.log('Disconnected'),
      () => console.log('ERROR disconnecting')
    )
  }


  goToHomePage(){
    this.navCtrl.push(HomePage)
  }

  goToDeviceInfoPage() {
    console.log(this.manu+ 'pushed in');
    this.navCtrl.push(DeviceInfoPage,{manu:this.manu,sysid:this.sysid, pnpid:this.pnpid,
    cert:this.cert, softwarerevision:this.softwarerevision, firmware:this.firmware,hardwarerevision:this.hardwarerevision,
    serialnr:this.serialnr, modelnr: this.modelnr});
  }

  goToCsvDetailPage() {
    this.navCtrl.push(CsvDetailPage);
  }

  goToInfoPage(){
    this.navCtrl.push(InfopagePage);
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  goToLogPage(){
    this.navCtrl.push(LogPage);
  }

  goToFilesPage(){
    this.navCtrl.push(FilesPage);
  }

}
