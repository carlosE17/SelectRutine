import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  constructor(private apiService: ApiService ) { }
  TiposDeEjercicio = ["Remo Horizontal - Espalda", "Curl Concentrado - Bicep", "Elevacion Lateral - Hombro"];
  PathGifs = ['../assets/media/espalda2.gif', '../assets/media/curl2.gif', '../assets/media/hombros1.gif'];
  eficienciaActual = 0;
  menosRepsActual = 0;
  eficienciaEjercicios: any = [];
  repeticionesT: any = [];

  ngOnInit(): void {
    this.getEficiencia();
    this.getRepeticionesTipo();
  }

  getEficiencia() {
    this.apiService.getEficienciaEjercicio().subscribe(
      res => {
        this.eficienciaEjercicios = res;
        this.eficienciaActual = this.eficienciaEjercicios[0].tipo -1;
        console.log(res);
      },
      err => console.error(err)
    );
  }

  getRepeticionesTipo() {
    this.apiService.getRepeticionesTipo().subscribe(
      res => {
        this.repeticionesT = res;
        this.menosRepsActual = this.repeticionesT[0].tipo -1;
        console.log(res);
      },
      err => console.error(err)
    );
  }



}
