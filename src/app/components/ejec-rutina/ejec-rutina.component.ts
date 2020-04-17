import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { timer } from "rxjs";
import { SocketService } from '../../services/socket-.service';
import { ToastrService } from 'ngx-toastr';


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
  ejercicioActual = 1;
  activo = false;
  yaInicio = false;
  malas = 0;
  buenas = 0;
  tpausa = 0;
  constructor(private servicioHttp: ApiService, private socketConnection: SocketService, private toastr: ToastrService) {
  }

  ngOnInit(): void {

    timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.activo && this.yaInicio) {
        this.seg++;
        if (this.seg === 60) {
          this.min++;
          this.seg = 0;
        }
      } else {
        this.tpausa++;
        if (this.tpausa === 30) {
          this.activo = true;
          this.tpausa = 0;
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
      if (v === 1) {
        this.toastr.info('Rutina en pausa', 'Pausa!');
        this.pausar();
      } else if (v === 2) {
        this.toastr.error('Rutina Terminada', 'Pausa!');
        this.finalizar();
      } else if (v === 0 && !this.activo && this.yaInicio) {
        this.activo = true;
        this.toastr.success('Puede Continar con la rutina', 'Reanudar!');
      }
      this.totalSets = v;
    });

    this.socketConnection.getb().subscribe((v: number) => {
      this.buenas = v;
    });

    this.socketConnection.getm().subscribe((v: number) => {
      this.malas = v;
    });

    this.socketConnection.getEjercicio().subscribe((v: number) => {
      this.ejercicioActual = v;
    });

  }

  pausar() {
    this.activo = false;
    this.servicioHttp.sendPausa({ pausa: 1 });
  }
  continuar() {
    this.activo = true;
    this.yaInicio = true;
    this.tpausa = 0;
    this.servicioHttp.saveRutina({ rutina: JSON.parse(localStorage.getItem('ArregloE')) }).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
    let ArregloEjercicios = []
    localStorage.setItem("ArregloE", JSON.stringify(ArregloEjercicios));
  }
  finalizar() {
    this.activo = false;
    this.seg = 0;
    this.min = 0;
    this.servicioHttp.sendPausa({ pausa: 2 });
  }


}


