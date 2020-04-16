import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { timer } from "rxjs";
import { SocketService } from '../../services/socket-.service';


@Component({
  selector: 'app-ejec-rutina',
  templateUrl: './ejec-rutina.component.html',
  styleUrls: ['./ejec-rutina.component.css']
})
export class EjecRutinaComponent implements OnInit {
  PathGifs = ['../../../assets/media/espalda2.gif', '../../../assets/media/curl2.gif', '../../../assets/media/hombros1.gif'];
  TiposDeEjercicio = ["Espalda", "Bicep", "Hombro"];
  seg = 0;
  min = 0;
  peso = 0.0;
  reps = 0;
  totalReps = 10;
  sets = 0;
  totalSets = 2;
  ejercicioActual = 0;
  activo = true;
  malas = 0;
  buenas = 0;
  constructor(private servicioHttp: ApiService, private socketConnection: SocketService) {
  }

  ngOnInit(): void {
    this.servicioHttp.saveRutina({ rutina: JSON.parse(localStorage.getItem('ArregloE')) });
    timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.activo) {
        this.seg++;
        if (this.seg === 60) {
          this.min++;
          this.seg = 0;
        }
      }

    });

    this.socketConnection.getPeso().subscribe((v: number) => {
      this.peso = v;
    });

    this.socketConnection.getReps().subscribe((v: number) => {
      this.reps = v;
    });

    this.socketConnection.getSets().subscribe((v: number) => {
      this.sets = v;
    });

    this.socketConnection.getTr().subscribe((v: number) => {
      this.totalReps = v;
    });

    this.socketConnection.getTs().subscribe((v: number) => {
      this.totalSets = v;
    });

    this.socketConnection.getb().subscribe((v: number) => {
      this.buenas = v;
    });

    this.socketConnection.getm().subscribe((v: number) => {
      this.malas = v;
    });


  }

  pausar() {
    this.activo = false;
    this.servicioHttp.sendPausa({ pausa: 1 });
  }
  continuar() {
    this.activo = true;
  }
  finalizar() {
    this.activo = false;
    this.seg = 0;
    this.min = 0;
    this.servicioHttp.sendPausa({ pausa: 2 });
  }


}


