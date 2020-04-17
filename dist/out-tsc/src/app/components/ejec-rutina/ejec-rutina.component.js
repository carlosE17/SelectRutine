import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { timer } from "rxjs";
let EjecRutinaComponent = class EjecRutinaComponent {
    constructor(servicioHttp, socketConnection, toastr) {
        this.servicioHttp = servicioHttp;
        this.socketConnection = socketConnection;
        this.toastr = toastr;
        this.PathGifs = ['../../../assets/media/espalda2.gif', '../../../assets/media/curl2.gif', '../../../assets/media/hombros1.gif'];
        this.TiposDeEjercicio = ["Espalda", "Bicep", "Hombro"];
        this.seg = 0;
        this.min = 0;
        this.peso = 0.0;
        this.reps = 0;
        this.totalReps = 10;
        this.sets = 0;
        this.totalSets = 2;
        this.ejercicioActual = 1;
        this.activo = false;
        this.yaInicio = false;
        this.malas = 0;
        this.buenas = 0;
        this.tpausa = 0;
    }
    ngOnInit() {
        timer(0, 1000).subscribe(ellapsedCycles => {
            if (this.activo && this.yaInicio) {
                this.seg++;
                if (this.seg === 60) {
                    this.min++;
                    this.seg = 0;
                }
            }
            else {
                this.tpausa++;
                if (this.tpausa === 30) {
                    this.activo = true;
                    this.tpausa = 0;
                }
            }
        });
        this.socketConnection.getPeso().subscribe((v) => {
            this.peso = v;
        });
        this.socketConnection.getReps().subscribe((v) => {
            this.reps = v;
        });
        this.socketConnection.getSets().subscribe((v) => {
            this.sets = v;
        });
        this.socketConnection.getTr().subscribe((v) => {
            this.totalReps = v;
        });
        this.socketConnection.getTs().subscribe((v) => {
            if (v == 1) {
                //this.pausar();
                this.activo = false;
                this.toastr.info('Rutina en pausa', 'Pausa!');
            }
            else if (v == 2) {
                this.activo = false;
                this.yaInicio = false;
                this.toastr.error('Rutina Terminada', 'Pausa!');
            }
            else if (v == 0 && !this.activo && this.yaInicio) {
                this.activo = true;
                this.toastr.success('Puede Continar con la rutina', 'Reanudar!');
            }
            this.totalSets = v;
        });
        this.socketConnection.getb().subscribe((v) => {
            this.buenas = v;
        });
        this.socketConnection.getm().subscribe((v) => {
            this.malas = v;
        });
        this.socketConnection.getEjercicio().subscribe((v) => {
            this.ejercicioActual = v;
        });
    }
    pausar() {
        // this.servicioHttp.sendPausa({ pausa: 1 });
        this.servicioHttp.sendPausa({ pausa: 1 }).subscribe(res => {
            this.toastr.info('Rutina en pausa', 'Pausa!');
            this.activo = false;
            console.log(res);
        }, err => console.log(err));
    }
    continuar() {
        this.activo = true;
        this.yaInicio = true;
        this.tpausa = 0;
        this.servicioHttp.saveRutina({ rutina: JSON.parse(localStorage.getItem('ArregloE')) }).subscribe((res) => {
            console.log(res);
        });
        let ArregloEjercicios = [];
        localStorage.setItem("ArregloE", JSON.stringify(ArregloEjercicios));
    }
    finalizar() {
        this.servicioHttp.sendPausa({ pausa: 2 }).subscribe(res => {
            this.toastr.error('Rutina Terminada', 'Pausa!');
            this.activo = false;
            this.yaInicio = false;
            this.seg = 0;
            this.min = 0;
            console.log(res);
        }, err => console.log(err));
    }
};
EjecRutinaComponent = __decorate([
    Component({
        selector: 'app-ejec-rutina',
        templateUrl: './ejec-rutina.component.html',
        styleUrls: ['./ejec-rutina.component.css']
    })
], EjecRutinaComponent);
export { EjecRutinaComponent };
//# sourceMappingURL=ejec-rutina.component.js.map