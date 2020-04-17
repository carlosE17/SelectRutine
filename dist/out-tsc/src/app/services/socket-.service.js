import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
let SocketService = class SocketService {
    constructor() {
        this.url = 'http://3.15.190.231:8080';
        this.getPeso = () => {
            return new Observable(observer => {
                this.socket.on('getPeso', (v) => observer.next(v));
            });
        };
        this.getReps = () => {
            return Observable.create((observer) => {
                this.socket.on('getReps', (v) => {
                    observer.next(v);
                });
            });
        };
        this.getSets = () => {
            return Observable.create((observer) => {
                this.socket.on('getSets', (v) => {
                    observer.next(v);
                });
            });
        };
        this.getTs = () => {
            return Observable.create((observer) => {
                this.socket.on('getTs', (v) => {
                    observer.next(v);
                });
            });
        };
        this.getTr = () => {
            return Observable.create((observer) => {
                this.socket.on('getTr', (v) => {
                    observer.next(v);
                });
            });
        };
        this.getb = () => {
            return Observable.create((observer) => {
                this.socket.on('buenas', (v) => {
                    observer.next(v);
                });
            });
        };
        this.getm = () => {
            return Observable.create((observer) => {
                this.socket.on('malas', (v) => {
                    observer.next(v);
                });
            });
        };
        this.getEjercicio = () => {
            return Observable.create((observer) => {
                this.socket.on('ejercicio', (v) => {
                    observer.next(v);
                });
            });
        };
        this.socket = io.connect(this.url, { reconnect: true });
    }
};
SocketService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SocketService);
export { SocketService };
//# sourceMappingURL=socket-.service.js.map