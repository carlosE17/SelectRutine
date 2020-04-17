import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.API_URI = 'http://3.15.190.231:3000/api';
    }
    saveRutina(lista) {
        console.log(lista);
        return this.http.post(`${this.API_URI}/newRutina`, lista);
    }
    sendPausa(p) {
        console.log(p);
        return this.http.post(`${this.API_URI}/newPausa`, p);
    }
    getCorrectas() {
        return this.http.get(`${this.API_URI}/getCorrectas`);
    }
    getIncorrectas() {
        return this.http.get(`${this.API_URI}/getIncorrectas`);
    }
    getPausa() {
        return this.http.get(`${this.API_URI}/getPausa`);
    }
    getEficienciaEjercicio() {
        return this.http.get(`${this.API_URI}/getEficienciaEjercicio`);
    }
    getEficienciaRutina() {
        return this.http.get(`${this.API_URI}/getEficienciaRutina`);
    }
    getRelacionRep() {
        return this.http.get(`${this.API_URI}/getRelacionRep`);
    }
    getRepeticionesTipo() {
        return this.http.get(`${this.API_URI}/getRepeticionesTipo`);
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map