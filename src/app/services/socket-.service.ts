import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = 'http://localhost:3000';
  private socket;
  constructor() {
    this.socket = io.connect(this.url);
  }

  public prueba(){
    this.socket.on('prueba',function(ret){
      console.log(ret);
    });
  }

  public getPeso = () => {
    
      this.socket.on('getPeso', (v) => {
       return Number(v);
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
  


}
