import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EjecRutinaComponent } from './components/ejec-rutina/ejec-rutina.component';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SugerenciaComponent } from './components/sugerencia/sugerencia.component';
const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'play', component: EjecRutinaComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'sugerencia', component: SugerenciaComponent },
    { path: '**', component: HomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map