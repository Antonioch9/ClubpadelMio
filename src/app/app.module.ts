import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NuevoJugadorComponent } from './jugadores/nuevo-jugador/nuevo-jugador.component';
import { ListadoJugadorComponent } from './jugadores/listado-jugador/listado-jugador.component';
import { EditarJugadorComponent } from './jugadores/editar-jugador/editar-jugador.component';


const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevo-jugador', component: NuevoJugadorComponent },
  { path: 'listado-jugador', component: ListadoJugadorComponent },
  { path: 'editar-jugador', component: EditarJugadorComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    BarraLateralComponent,
    NuevoJugadorComponent,
    ListadoJugadorComponent,
    EditarJugadorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
