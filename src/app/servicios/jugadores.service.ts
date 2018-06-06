import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { 
  nombre: string,
  apellido:string,
  dni:string,
  pasaporte:string,
  nacionalidad:string,
  nivel:string,
  id:string,
  pagado:string,
  numeroTarjeta:string,
  nuemroUsuario:string,

}
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;



  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('jugadores');
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
   }

   getItem(){
     return this.items
   }
   postItem(item: Item){
      this.itemsCollection.add(item);
    }
}
