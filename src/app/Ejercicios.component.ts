import {Component} from '@angular/core';
import { EjerciciosService } from './Ejercicios.service';


@Component({
    selector: 'ejercicios',
    template: `<h2>{{t}}</h2>
    
    <ul>
        <li *ngFor="let ejercicio of ejercicios">
        {{ejercicio}}
        </li>
    
    </ul>

    `
})
export class Ejercicio {
    t="Seleccione un Ejercicio:";
    ejercicios;

    constructor(service:EjerciciosService){
        this.ejercicios=service.getEjercicios();
    }
    
}