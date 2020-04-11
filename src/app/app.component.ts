import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Exercise, TipoEjercicio } from './Exercise';
import { EjerciciosService } from './Ejercicios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ArregloEjercicios: Exercise[] = [];
  TiposDeEjercicio;
  DescripcionEjercicio;
  PathGifs = ['assets/media/espalda2.gif', 'assets/media/curl2.gif', 'assets/media/hombros1.gif'];
  t = 'Crear rutina de ejercicios';
  tipoActual = TipoEjercicio.Espalda;
  
  public constructor(private titleService: Title, service: EjerciciosService) {
    this.titleService.setTitle('Rutinas');
    this.TiposDeEjercicio = service.getEjercicios();
    this.DescripcionEjercicio = service.getDescripcion();
  }
  setTipo(i: TipoEjercicio) {
    this.tipoActual = i;
  }
  addToRutina(s:number,r:number) {
    this.ArregloEjercicios.push(new Exercise(this.tipoActual, s, r));
  }


}
