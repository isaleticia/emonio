import { DeviceInfoPage } from './../deviceInfo/deviceInfo';
import { HomePage } from './../home/home';
import { BLE } from '@ionic-native/ble';
import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CsvDetailPage } from '../csvDetail/csvDetail';

// Bluetooth UUIDs Clemens vorgegeben
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
  getEnergy = "energy";
  getCsv = "files";
  lineChart : any;
  chartData : any[];
  energyData : any;
  csvData : any;
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

    this.ble.connect(device.id).subscribe(
    device =>this.onConnected(device),
    device => this.onDisconnected(device),

  );

}

   // connection to the peripheral
 onConnected(device) {
   console.log(`Connected to ${device.id}`)
   this.ngZone.run(() => {
   this.device = device;
 });

   // writes to characteristic
   // last parameter must be an arraybuffer - use stringToBytes() to convert strings to arraybuffers
   // if you want to display the data convert the arraybuffer to string with bytesToString()

   this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.login)).then(
   data => console.log ("write login commando" + this.bytesToString(data)));

   this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.getEnergy)).then(
   data => console.log ("write energy commando" + this.bytesToString(data)));
   this.ble.write(device.id, SERVICE_UUID, WRITE_CHARACTERISTIC, this.stringToBytes(this.getCsv)).then(
   data => console.log ("write csv download commando" + this.bytesToString(data)));


   /* reads the current value of the characteristic
      bytesToString() converts output (arraybuffer) to string
      parse the JSON String to JS Object to access specific value */

      this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(
          buffer => {
            try{
            this.csvData = new Uint8Array(buffer);
            this.ngZone.run(() => {
              console.log("CSV: " + this.bytesToString(this.csvData));


            });
          } catch(e){
              console.log("Parse Error");

          }
          }
        )

   this.ble.read(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).then(
       buffer => {
         try{
         this.energyData = JSON.parse(this.bytesToString(new Uint8Array(buffer)));
         this.ngZone.run(() => {

           this.vrms0 = this.energyData.phase[0].vrms;
           this.irms0 = this.energyData.phase[0].irms;
           this.watt0 = this.energyData.phase[0].watt;
           this.var0 = this.energyData.phase[0].var;
           this.va0 = this.energyData.phase[0].va;
           this.freq0 = this.energyData.phase[0].freq;
           this.phi0 = this.energyData.phase[0].phi;

           this.vrms1 = this.energyData.phase[1].vrms;
           this.irms1 = this.energyData.phase[1].irms;
           this.watt1 = this.energyData.phase[1].watt;
           this.var1 = this.energyData.phase[1].var;
           this.va1 = this.energyData.phase[1].va;
           this.freq1 = this.energyData.phase[1].freq;
           this.phi1 = this.energyData.phase[1].phi;

           this.vrms2 = this.energyData.phase[2].vrms;
           this.irms2 = this.energyData.phase[2].irms;
           this.watt2 = this.energyData.phase[2].watt;
           this.var2 = this.energyData.phase[2].var;
           this.va2 = this.energyData.phase[2].va;
           this.freq2 = this.energyData.phase[2].freq;
           this.phi2 = this.energyData.phase[2].phi;

          this.createLineChart();


         });
       } catch(e){
           console.log("Parse Error");

       }
       }
     )


   // subscribe for notifications when value changes
   this.ble.startNotification(device.id, SERVICE_UUID, RECEIVE_CHARACTERISTIC).subscribe(
     buffer => {
       try{
       this.energyData = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(buffer)));
       this.ngZone.run(() => {
         this.vrms0 = this.energyData.phase[0].vrms;
         this.irms0 = this.energyData.phase[0].irms;
         this.watt0 = this.energyData.phase[0].watt;
         this.var0 = this.energyData.phase[0].var;
         this.va0 = this.energyData.phase[0].va;
         this.freq0 = this.energyData.phase[0].freq;
         this.phi0 = this.energyData.phase[0].phi;

         this.vrms1 = this.energyData.phase[1].vrms;
         this.irms1 = this.energyData.phase[1].irms;
         this.watt1 = this.energyData.phase[1].watt;
         this.var1 = this.energyData.phase[1].var;
         this.va1 = this.energyData.phase[1].va;
         this.freq1 = this.energyData.phase[1].freq;
         this.phi1 = this.energyData.phase[1].phi;

         this.vrms2 = this.energyData.phase[2].vrms;
         this.irms2 = this.energyData.phase[2].irms;
         this.watt2 = this.energyData.phase[2].watt;
         this.var2 = this.energyData.phase[2].var;
         this.va2 = this.energyData.phase[2].va;
         this.freq2 = this.energyData.phase[2].freq;
         this.phi2 = this.energyData.phase[2].phi;

         this.createLineChart();
         console.log(this.bytesToString(this.energyData));

       });
     } catch(e){
         console.log("Parse Error");

     }
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
//     this.ble.read(device.id, '180A', '2A24').then(function(buffer) {        //model nr  x
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A24').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.modelnr = this.bytesToString(data);
   });
 }
)

//     // 2A25 serial nr    x
//     this.ble.read(device.id, '180A', '2A25').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A25').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.serialnr = this.bytesToString(data);
   });
 }
)

//     //hardware revision string 2A27      x
//     this.ble.read(device.id, '180A', '2A27').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A27').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.hardwarerevision = this.bytesToString(data);
   });
 }
)
//     //frimware 2A26     x
//     this.ble.read(device.id, '180A', '2A26').then(function(buffer) {
//       this.variable=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//
//     });
//
//

this.ble.read(device.id, '180A', '2A26').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.firmware = this.bytesToString(data);
   });
 }
)

//     //software revision string 2A28   x
//     this.ble.read(device.id, '180A', '2A28').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
//
this.ble.read(device.id, '180A', '2A28').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.softwarerevision = this.bytesToString(data);
   });
 }
)
//     // this.ble.read(device.id, '180A', '2A29').then(function(buffer) {          //manufacturer   x
//     //   this.manu=(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     // });
//
//
// // MANUFACTURER TWO  DELETE MANUFACTURER AFTERWARDS
//
//
//
this.ble.read(device.id, '180A', '2A29').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.manu = this.bytesToString(data);
   });
 }
)
//
//
//
//
//     //2A2A certification data list      noo
//     this.ble.read(device.id, '180A', '2A2A').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });

this.ble.read(device.id, '180A', '2A2A').then(
 buffer => {
   var data = new Uint8Array(buffer);
   console.log("current value: " + this.bytesToString(data));
   this.ngZone.run(() => {
     this.cert = this.bytesToString(data);
   });
 }
)
//
//     //pnp id 2A50 noooo
//     this.ble.read(device.id, '180A', '2A50').then(function(buffer) {
//       alert(String.fromCharCode.apply(null, new Uint8Array(buffer)))
//     });
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

 createLineChart(){

 this.lineChart = new Chart(this.lineCanvas.nativeElement, {

   type: 'line',
   data: {
       labels: ["Phase A", "Phase B", "Phase C" ],
       datasets: [
           {
               label: "in Watt",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(234,16,16,1)",
               borderColor: "rgba(234,16,16,1)",
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: "rgba(234,16,16,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: "rgba(75,192,192,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
               data : [parseInt(this.vrms0), parseInt(this.vrms1), parseInt(this.vrms2)],
               spanGaps: false,
           }
       ]
   }

});
}


  onDisconnected(device) {
    console.log(`Disconnected from ${device.id}`)
      }

  ionViewDidLoad() {
    setTimeout(() => {
    }, 5000);
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

}
