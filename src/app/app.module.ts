import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjecRutinaComponent } from './components/ejec-rutina/ejec-rutina.component';
import { HomeComponent } from './components/home/home.component';
import { BarraComponent } from './components/barra/barra.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    EjecRutinaComponent,
    HomeComponent,
    BarraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
