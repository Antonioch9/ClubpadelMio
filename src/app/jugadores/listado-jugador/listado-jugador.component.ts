import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { JugadoresService } from '../../servicios/jugadores.service';

@Component({
  selector: 'app-listado-jugador',
  templateUrl: './listado-jugador.component.html',
  styleUrls: ['./listado-jugador.component.css']
})
export class ListadoJugadorComponent implements OnInit {
  items: Observable<any[]>;
  item:any


  constructor(db: AngularFirestore,private jugadoresService:JugadoresService) {
    this.items = db.collection('jugadores').valueChanges();
    this.item = this.jugadoresService.getItem().subscribe(resp=>{
      this.item = resp;
      console.log(this.item)
    })
  }

  

  ngOnInit() {
  }


}
