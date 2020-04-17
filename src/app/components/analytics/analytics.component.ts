import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  public myChart: any = null;
  public API_URL = 'http://3.15.190.231:3000/api';
  public nombre="espalda";
  public ex_bicep: number=0;
  public ex_hombro:number=0;
  public ex_espalda:number= 0;
  public fa_bicep: number=0;
  public fa_hombro:number=0;
  public fa_espalda:number= 0;
  public pa_bicep: number=0;
  public pa_hombro:number=0;
  public pa_espalda:number= 0;
  public bicep2 = [];
  public hombro2 = [];
  public espalda2 = [];
  public ejercicios=[];
  public peso = [];
  public ritmo = [];

  constructor() {
    this.getdata();
   }

  ngOnInit(): void {

    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: [] //'1pm', '2pm', '2pm', '4pm', '5pm', '6pm', '7pm', '8pm'
      },
      options: {
          responsive: true,
          title: {
              display: true,
              text: 'SmartApp'
          },
          tooltips: {
              mode: 'index',
              intersect: false,
          },
          hover: {
              mode: 'nearest',
              intersect: true
          },
          scales: {
              xAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Ejercicios'
                  }
              }],
              yAxes: [{
                  display: true,
                  scaleLabel: {
                      display: true,
                      labelString: 'Data'
                  }
              }]
          }
      }
  });


  }
  limpiar() {
    this.ejercicios = [];
    this.peso = [];
    this.ritmo = [];
    this.myChart.data.labels = [];
    this.myChart.update();
  }
  getEjercicios(espalda,hombro,bicep){
    this.ejercicios.push(espalda);
    this.ejercicios.push(hombro);
    this.ejercicios.push(bicep);
  }
  getdata(): void {

       /* 
        $.get(IP + "/api/sensores/peso", function (data) {
            let tmp = data;
            console.log(data);
            console.log(myChart.data);
            if (myChart.data.labels.length == 0) {
                for (var i = 0; i < tmp.length; i++) {
                    myChart.data.labels.push(tmp[i].FECHA);
                    peso.push(tmp[i].PESOKG);
                }
            }
            myChart.update();
        });
        $.get(IP + "/api/sensores/contador_pasos", function (data) {
            let tmp = data;
            for (var i = 0; i < tmp.length; i++) {
                pasos.push(tmp[i].PASOS);
            }
            console.log(pasos);
        });*/

    }
    public newSensor(chart:Chart, data): void {
      chart.data.datasets.push(data);
      chart.update();
    }
    limpiarData():void {

      for (var i = 0; i < this.myChart.data.datasets.length; i++) {
          this.myChart.data.datasets.pop();
      }
      this.myChart.data.datasets.pop();
      this.myChart.update();
    }
    btnRExito(){
      //metodo a llamar para la data
      this.getEjercicios(this.ex_espalda,this.ex_hombro,this.ex_bicep);
      this.myChart.data.labels = ["espalda","hombro","bicep"];
            var exito = {
                label: 'Repeticiones Exitosas',
                data: this.ejercicios,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }
    btnRFallo(){
      //metodo a llamar para la data
      this.getEjercicios(this.fa_espalda,this.fa_hombro,this.fa_bicep);
      this.myChart.data.labels = ["espalda","hombro","bicep"];
            var exito = {
                label: 'Repeticiones Fallidas',
                data: this.ejercicios,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }
    btnPausas(){
      //metodo a llamar para la data
      this.getEjercicios(this.pa_espalda,this.pa_hombro,this.pa_bicep);
      this.myChart.data.labels = ["espalda","hombro","bicep"];
            var exito = {
                label: 'Repeticiones Fallidas',
                data: this.ejercicios,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }
    btnEfiGeneral(){
      //metodo a llamar para la data
      var rep_total=[30,30,20];
      var rep_exitosas=[20,30,14];
      var rep_ef=[];
      for(var i=0;i<rep_total.length;i++){
        if(rep_exitosas[i] == 0){
          continue;
        }
        rep_ef.push(rep_exitosas[i]/rep_total[i]);
      }
      this.myChart.data.labels = ["espalda","hombro","bicep"];
            var exito = {
                label: 'Eficiencia',
                data: rep_ef,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }
    btnEficiencia(){
      //metodo a llamar para la data
      var rep_labels=["sesion1","sesion2","sesion3"];
      var rep_total=[30,30,20];
      var rep_exitosas=[20,30,14];
      var rep_ef=[];
      for(var i=0;i<rep_total.length;i++){
        if(rep_exitosas[i] == 0){
          continue;
        }
        rep_ef.push(rep_exitosas[i]/rep_total[i]);
      }
      this.myChart.data.labels = rep_labels;
            var exito = {
                label: this.nombre,
                data: rep_ef,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }
    btnPeso(){
      //metodo a llamar para la data
      var rep_labels=["sesion1","sesion2","sesion3"];
      var rep_total=[30,30,20];
      this.myChart.data.labels = rep_labels;
            var exito = {
                label: this.nombre,
                data: rep_total,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }
    btnRC(){
      //metodo a llamar para la data
      var rep_labels=["sesion1","sesion2","sesion3"];
      var rep_total=[30,30,20];
      this.myChart.data.labels = rep_labels;
            var exito = {
                label: this.nombre,
                data: rep_total,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            }
            //myChart.type=
            this.newSensor(this.myChart, exito);
    }

 


}
