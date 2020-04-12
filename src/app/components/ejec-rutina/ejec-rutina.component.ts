import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-ejec-rutina',
  templateUrl: './ejec-rutina.component.html',
  styleUrls: ['./ejec-rutina.component.css']
})
export class EjecRutinaComponent implements OnInit {
  t;
  constructor(private servicioHttp: ApiService) {

  }

  ngOnInit(): void {
    this.servicioHttp.pruebaGet().subscribe(
      res => {
        this.t = res;
        console.log(res);
      },
      err => {
        this.t = err;
        console.log(err);
      }
    );
  }

}
