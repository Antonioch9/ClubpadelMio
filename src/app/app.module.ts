import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';

// import * as $ from 'jquery';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { InicioComponent } from './inicio/inicio.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { NuevoJugadorComponent } from './jugadores/nuevo-jugador/nuevo-jugador.component';
import { ListadoJugadorComponent } from './jugadores/listado-jugador/listado-jugador.component';
import { EditarJugadorComponent } from './jugadores/editar-jugador/editar-jugador.component';
import { NuevaReservaComponent } from './reservas/nueva-reserva/nueva-reserva.component';
import { ListadoReservasComponent } from './reservas/listado-reservas/listado-reservas.component';
import { EditarReservasComponent } from './reservas/editar-reservas/editar-reservas.component';
import { GraficasComponent } from './estadisticas/graficas/graficas.component';
//sservicios
import { JugadoresService } from './servicios/jugadores.service'


const rutas: Routes = [
  { path: '', component: InicioComponent },
  { path: 'nuevo-jugador', component: NuevoJugadorComponent },
  { path: 'listado-jugador', component: ListadoJugadorComponent },
  { path: 'editar-jugador', component: EditarJugadorComponent },
  { path: 'nueva-reservas', component: NuevaReservaComponent },
  { path: 'listado-reservas', component: ListadoReservasComponent },
  { path: 'editar-reservas', component: EditarReservasComponent },
  { path: 'graficas', component: GraficasComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NuevoJugadorComponent,
    ListadoJugadorComponent,
    EditarJugadorComponent,
    NuevaReservaComponent,
    ListadoReservasComponent,
    EditarReservasComponent,
    GraficasComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BsDatepickerModule.forRoot(),
    DndModule.forRoot(),
    RouterModule.forRoot(rutas)
  ],
  providers: [JugadoresService],
  bootstrap: [AppComponent]
})


export class AppModule { }
