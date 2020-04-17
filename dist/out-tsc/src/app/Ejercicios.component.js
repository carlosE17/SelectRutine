import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Ejercicio = class Ejercicio {
    constructor(service) {
        this.t = "Seleccione un Ejercicio:";
        this.ejercicios = service.getEjercicios();
    }
};
Ejercicio = __decorate([
    Component({
        selector: 'ejercicios',
        template: `<h2>{{t}}</h2>
    
    <ul>
        <li *ngFor="let ejercicio of ejercicios">
        {{ejercicio}}
        </li>
    
    </ul>

    `
    })
], Ejercicio);
export { Ejercicio };
//# sourceMappingURL=Ejercicios.component.js.map