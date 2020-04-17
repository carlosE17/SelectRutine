import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Chart } from 'chart.js';
let AnalyticsComponent = class AnalyticsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.myChart = null;
        this.API_URL = 'http://3.15.190.231:3000/api';
        this.nombre = "espalda";
        this.nombre_id = 1;
        this.ejercicios = [];
        this.correctas = [];
        this.pausas = [];
        this.eficiencias = [];
        this.relacion = [];
        this.getdata();
    }
    ngOnInit() {
        this.myChart = new Chart('myChart', {
            type: 'line',
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
    type_ejercicio(tmp) {
        console.log(tmp);
        if (tmp.toLowerCase() == 'hombro') {
            this.nombre_id = 3;
        }
        else if (tmp.toLowerCase() == 'espalda') {
            this.nombre_id = 1;
        }
        else if (tmp.toLowerCase() == 'bicep') {
            this.nombre_id = 2;
        }
    }
    limpiar() {
        this.ejercicios = [];
        this.myChart.data.labels = [];
        this.myChart.update();
    }
    getEjercicios(espalda, hombro, bicep) {
        this.ejercicios.push(espalda);
        this.ejercicios.push(hombro);
        this.ejercicios.push(bicep);
    }
    getdata() {
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
    newSensor(chart, data, type) {
        chart.data.datasets.push(data);
        chart.type = type;
        chart.update();
    }
    limpiarData() {
        for (var i = 0; i < this.myChart.data.datasets.length; i++) {
            this.myChart.data.datasets.pop();
        }
        this.myChart.data.datasets.pop();
        this.myChart.update();
    }
    btnRExito() {
        //metodo a llamar para la data
        this.apiService.getCorrectas().subscribe(res => {
            this.correctas = res;
            console.log(res);
            var ex_bicep = 0;
            var ex_hombro = 0;
            var ex_espalda = 0;
            for (var i = 0; i < this.correctas.length; i++) {
                if (this.correctas[i].estado == "1") {
                    console.log('entro');
                    if (this.correctas[i].tipo == 1) {
                        ex_espalda = ex_espalda + 1;
                    }
                    else if (this.correctas[i].tipo == 2) {
                        ex_bicep = ex_bicep + 1;
                    }
                    else if (this.correctas[i].tipo == 3) {
                        ex_hombro = ex_hombro + 1;
                    }
                }
            }
            this.getEjercicios(ex_espalda, ex_hombro, ex_bicep);
            this.myChart.data.labels = ["espalda", "hombro", "bicep"];
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
            };
            //myChart.type=
            this.newSensor(this.myChart, exito, 'bar');
            this.ejercicios = [];
        }, err => console.error(err));
    }
    btnRFallo() {
        this.apiService.getIncorrectas().subscribe(res => {
            this.correctas = res;
            console.log(res);
            var fa_bicep = 0;
            var fa_hombro = 0;
            var fa_espalda = 0;
            for (var i = 0; i < this.correctas.length; i++) {
                if (this.correctas[i].estado == "0") {
                    if (this.correctas[i].tipo == 1) {
                        fa_espalda = fa_espalda + 1;
                    }
                    else if (this.correctas[i].tipo == 2) {
                        fa_bicep = fa_bicep + 1;
                    }
                    else if (this.correctas[i].tipo == 3) {
                        fa_hombro = fa_hombro + 1;
                    }
                }
            }
            this.getEjercicios(fa_espalda, fa_hombro, fa_bicep);
            this.myChart.data.labels = ["espalda", "hombro", "bicep"];
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
            };
            //myChart.type=
            this.newSensor(this.myChart, exito, 'bar');
            this.ejercicios = [];
        }, err => console.error(err));
    }
    btnPausas() {
        //metodo a llamar para la data
        this.apiService.getPausa().subscribe(res => {
            this.pausas = res;
            console.log(res);
            var fa_bicep = 0;
            var fa_hombro = 0;
            var fa_espalda = 0;
            for (var i = 0; i < this.pausas.length; i++) {
                if (this.pausas[i].ejercicio == 1) {
                    fa_espalda = fa_espalda + 1;
                }
                else if (this.pausas[i].ejercicio == 2) {
                    fa_bicep = fa_bicep + 1;
                }
                else if (this.pausas[i].ejercicio == 3) {
                    fa_hombro = fa_hombro + 1;
                }
            }
            this.getEjercicios(fa_espalda, fa_hombro, fa_bicep);
            this.myChart.data.labels = ["espalda", "hombro", "bicep"];
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
            };
            //myChart.type=
            this.newSensor(this.myChart, exito, 'bar');
            this.ejercicios = [];
        }, err => console.error(err));
    }
    btnEfiGeneral() {
        //metodo a llamar para la data
        this.apiService.getEficienciaEjercicio().subscribe(res => {
            this.eficiencias = res;
            console.log(res);
            var ex_bicep = 0;
            var ex_hombro = 0;
            var ex_espalda = 0;
            for (var i = 0; i < this.eficiencias.length; i++) {
                if (this.eficiencias[i].tipo == 1) {
                    ex_espalda = this.eficiencias[i].Eficiencia;
                }
                else if (this.eficiencias[i].tipo == 2) {
                    ex_bicep = this.eficiencias[i].Eficiencia;
                }
                else if (this.eficiencias[i].tipo == 3) {
                    ex_hombro = this.eficiencias[i].Eficiencia;
                }
            }
            this.getEjercicios(ex_espalda, ex_hombro, ex_bicep);
            this.myChart.data.labels = ["Espalda", "Hombro", "Bicep"];
            var exito = {
                label: 'Eficiencia por Ejercicio',
                data: this.ejercicios,
                backgroundColor: [
                    '#e400ff',
                ],
                borderColor: [
                    '#e400ff'
                ],
                fill: false
            };
            //myChart.type=
            this.newSensor(this.myChart, exito, 'bar');
            this.ejercicios = [];
        }, err => console.error(err));
    }
    btnEficiencia() {
        //metodo a llamar para la data
        this.apiService.getEficienciaRutina().subscribe(res => {
            this.eficiencias = res;
            console.log(res);
            var rep_labels = [];
            var rep_ef = [];
            for (var i = 0; i < this.eficiencias.length; i++) {
                rep_labels.push("Rutina " + this.eficiencias[i].rutina);
                rep_ef.push(this.eficiencias[i].Eficiencia);
            }
            this.myChart.data.labels = rep_labels;
            this.myChart.type = 'line';
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
            };
            //myChart.type=
            this.newSensor(this.myChart, exito, 'bar');
        }, err => console.error(err));
    }
    btnPeso() {
        var color = '#e400ff';
        if (this.nombre_id == 3) { //hombro
            color = '#4b67f2';
        }
        else if (this.nombre_id == 2) { //bicep
            color = '#e25e5e';
        }
        else if (this.nombre_id == 1) { //espalda
            color = '#2ecc71';
        }
        this.apiService.getRelacionRep().subscribe(res => {
            this.relacion = res;
            console.log(res);
            var rep_labels = [];
            var rep_ef = [];
            for (var i = 0; i < this.relacion.length; i++) {
                if (this.nombre_id == this.relacion[i].tipo) {
                    rep_labels.push("Repeticion " + this.relacion[i].repeticion);
                    rep_ef.push(this.relacion[i].peso);
                }
            }
            this.myChart.data.labels = rep_labels;
            this.myChart.type = 'line';
            var exito = {
                label: 'Peso',
                data: rep_ef,
                backgroundColor: [
                    color,
                ],
                borderColor: [
                    color
                ],
                fill: false
            };
            //myChart.type=
            this.newSensor(this.myChart, exito, 'line');
        }, err => console.error(err));
    }
    btnRC() {
        //metodo a llamar para la data
        var color = '#e400ff';
        if (this.nombre_id == 3) { //hombro
            color = '#02177c';
        }
        else if (this.nombre_id == 2) { //bicep
            color = '#f30505';
        }
        else if (this.nombre_id == 1) { //espalda
            color = '#0f9806';
        }
        this.apiService.getRelacionRep().subscribe(res => {
            this.relacion = res;
            console.log(res);
            var rep_labels = [];
            var rep_ef = [];
            for (var i = 0; i < this.relacion.length; i++) {
                if (this.nombre_id == this.relacion[i].tipo) {
                    rep_labels.push("Repeticion " + this.relacion[i].repeticion);
                    rep_ef.push(this.relacion[i].ritmo);
                }
            }
            this.myChart.data.labels = rep_labels;
            var exito = {
                label: 'Ritmo cardiaco',
                data: rep_ef,
                backgroundColor: [
                    color,
                ],
                borderColor: [
                    color
                ],
                fill: false
            };
            this.myChart.type = 'line';
            this.newSensor(this.myChart, exito, 'line');
        }, err => console.error(err));
    }
};
AnalyticsComponent = __decorate([
    Component({
        selector: 'app-analytics',
        templateUrl: './analytics.component.html',
        styleUrls: ['./analytics.component.css']
    })
], AnalyticsComponent);
export { AnalyticsComponent };
//# sourceMappingURL=analytics.component.js.map