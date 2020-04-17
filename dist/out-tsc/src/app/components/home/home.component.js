import { __decorate } from "tslib";
import { Component } from '@angular/core';
var TipoEjercicio;
(function (TipoEjercicio) {
    TipoEjercicio[TipoEjercicio["Espalda"] = 0] = "Espalda";
    TipoEjercicio[TipoEjercicio["bicep"] = 1] = "bicep";
    TipoEjercicio[TipoEjercicio["hombro"] = 2] = "hombro";
})(TipoEjercicio || (TipoEjercicio = {}));
;
let HomeComponent = class HomeComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.ArregloEjercicios = [];
        this.nArr = "ArregloE";
        this.PathGifs = ['../assets/media/espalda2.gif', '../assets/media/curl2.gif', '../assets/media/hombros1.gif'];
        this.t = 'Formulario';
        this.tipoActual = TipoEjercicio.Espalda;
        // this.titleService.setTitle('Rutinas');
        this.TiposDeEjercicio = ["Remo Horizontal - Espalda", "Curl Concentrado - Bicep", "Elevacion Lateral - Hombro"];
        this.DescripcionEjercicio = ["Ejercicio que busca trabajar los musculos de espalda y pectoral", "Ejercicio que busca trabajar los musculos de la parte frontal del brazo", "Ejercicio que busca trabajar los musculos que confroman el hombro"];
    }
    setTipo(i) {
        this.tipoActual = i;
        console.log(this.tipoActual);
    }
    addToRutina(s, r) {
        this.ArregloEjercicios.push({ tipo: this.tipoActual + 1, sets: s, reps: r });
        localStorage.setItem(this.nArr, JSON.stringify(this.ArregloEjercicios));
    }
    clearRutina() {
        this.ArregloEjercicios = [];
        localStorage.setItem(this.nArr, JSON.stringify(this.ArregloEjercicios));
    }
    ngOnInit() {
        if (localStorage.getItem(this.nArr) === null) {
            localStorage.setItem(this.nArr, JSON.stringify(this.ArregloEjercicios));
        }
        else {
            this.ArregloEjercicios = JSON.parse(localStorage.getItem(this.nArr));
        }
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map