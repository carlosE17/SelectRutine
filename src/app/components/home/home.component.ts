import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

enum TipoEjercicio { Espalda = 0, bicep = 1, hombro = 2 };
interface Exercise {
  tipo: TipoEjercicio;
  sets: number;
  reps: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ArregloEjercicios: Exercise[] = [];
  TiposDeEjercicio;
  DescripcionEjercicio;
  nArr = "ArregloE";
  PathGifs = ['../assets/media/espalda2.gif', '../assets/media/curl2.gif', '../assets/media/hombros1.gif'];
  t = 'Formulario';
  tipoActual = TipoEjercicio.Espalda;
  constructor(private titleService: Title) {
    // this.titleService.setTitle('Rutinas');
    this.TiposDeEjercicio = ["Remo Horizontal - Espalda", "Curl Concentrado - Bicep", "Elevacion Lateral - Hombro"];
    this.DescripcionEjercicio = ["Ejercicio que busca trabajar los musculos de espalda y pectoral","Ejercicio que busca trabajar los musculos de la parte frontal del brazo","Ejercicio que busca trabajar los musculos que confroman el hombro"];
  }

  setTipo(i: TipoEjercicio) {
    this.tipoActual = i;
    console.log(this.tipoActual);
  }
  addToRutina(s: number, r: number) {
    this.ArregloEjercicios.push({ tipo: this.tipoActual+1, sets: s, reps: r });
    localStorage.setItem(this.nArr, JSON.stringify(this.ArregloEjercicios));
  }
  clearRutina() {
    this.ArregloEjercicios=[];
    localStorage.setItem(this.nArr, JSON.stringify(this.ArregloEjercicios));
  }

  ngOnInit(): void {
    if (localStorage.getItem(this.nArr) === null) {
      localStorage.setItem(this.nArr, JSON.stringify(this.ArregloEjercicios));
    } else {
      this.ArregloEjercicios = JSON.parse(localStorage.getItem(this.nArr));
    }

  }

}
