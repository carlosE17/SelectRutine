import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://localhost:8080';
  private socket;
  constructor() {
    this.socket = io.connect(this.url, { reconnect: true});
  }

  public getPeso = () => {

    return new Observable(observer => {
      this.socket.on('getPeso', (v) => observer.next(v));
    });

  }

  public getReps = () => {
    return Observable.create((observer) => {
      this.socket.on('getReps', (v) => {
        observer.next(v);
      });
    });
  }

  public getSets = () => {
    return Observable.create((observer) => {
      this.socket.on('getSets', (v) => {
        observer.next(v);
      });
    });
  }

  public getTs = () => {
    return Observable.create((observer) => {
      this.socket.on('getTs', (v) => {
        observer.next(v);
      });
    });
  }

  public getTr = () => {
    return Observable.create((observer) => {
      this.socket.on('getTr', (v) => {
        observer.next(v);
      });
    });
  }

  public getb = () => {
    return Observable.create((observer) => {
      this.socket.on('buenas', (v) => {
        observer.next(v);
      });
    });
  }

  public getm = () => {
    return Observable.create((observer) => {
      this.socket.on('malas', (v) => {
        observer.next(v);
      });
    });
  }

  public getEjercicio = () => {
    return Observable.create((observer) => {
      this.socket.on('ejercicio', (v) => {
        observer.next(v);
      });
    });
  }



}
