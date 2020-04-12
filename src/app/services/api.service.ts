import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  localUrl = 'httpbin.org';
  constructor(private http: HttpClient) { }

  pruebaGet() {
    console.log(`${this.localUrl}/get`);
    return this.http.get(`${this.localUrl}/get`);

  }
}
