import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
 selector: 'page-csvDetail',
 templateUrl: 'csvDetail.html',
})
export class CsvDetailPage {

  @ViewChild('lineCanvas') lineCanvas;

  device = [];
  lineChart : any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {


}


 createLineChart(){

 this.lineChart = new Chart(this.lineCanvas.nativeElement, {

   type: 'line',
   data: {
       labels: [1, 2, 3, 4, 5, 6, 7, 8],
       datasets: [
           {
               label: "egy_watt_a",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(22,93,246,1)",
               borderColor: "rgba(22,93,246,1)",
               borderCapStyle: 'square',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: "rgba(22,93,246),1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: "rgba(75,192,192,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
               data : [11, 4, 33, 49, 23, 1, 51, 19],
               spanGaps: false,
           },
           {
               label: "egy_watt_b",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(64,124,27,1)",
               borderColor: "rgba(64,124,27,1)",
               borderCapStyle: 'square',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: "rgba(64,124,27,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: "rgba(75,192,192,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
               data : [1, 14, 53, 29, 23, 31, 31, 9],
               spanGaps: false,
           },
           {
               label: "egy_watt_c",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(234,16,16,1)",
               borderColor: "rgba(234,16,16,1)",
               borderCapStyle: 'square',
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
               data : [16, 41, 32, 48, 3, 41, 28, 32],
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
    this.createLineChart();
    console.log('ionViewDidLoad CsvDetailPage');

  }

  goToHomePage(){
    this.navCtrl.push(HomePage)
  }

}
