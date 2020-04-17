import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SugerenciaComponent = class SugerenciaComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.TiposDeEjercicio = ["Remo Horizontal - Espalda", "Curl Concentrado - Bicep", "Elevacion Lateral - Hombro"];
        this.PathGifs = ['../assets/media/espalda2.gif', '../assets/media/curl2.gif', '../assets/media/hombros1.gif'];
        this.eficienciaActual = 0;
        this.menosRepsActual = 0;
        this.eficienciaEjercicios = [];
        this.repeticionesT = [];
    }
    ngOnInit() {
        this.getEficiencia();
        this.getRepeticionesTipo();
    }
    getEficiencia() {
        this.apiService.getEficienciaEjercicio().subscribe(res => {
            this.eficienciaEjercicios = res;
            this.eficienciaActual = this.eficienciaEjercicios[0].tipo - 1;
            console.log(res);
        }, err => console.error(err));
    }
    getRepeticionesTipo() {
        this.apiService.getRepeticionesTipo().subscribe(res => {
            this.repeticionesT = res;
            this.menosRepsActual = this.repeticionesT[0].tipo - 1;
            console.log(res);
        }, err => console.error(err));
    }
};
SugerenciaComponent = __decorate([
    Component({
        selector: 'app-sugerencia',
        templateUrl: './sugerencia.component.html',
        styleUrls: ['./sugerencia.component.css']
    })
], SugerenciaComponent);
export { SugerenciaComponent };
//# sourceMappingURL=sugerencia.component.js.map