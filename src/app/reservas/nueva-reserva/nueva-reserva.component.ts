import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {
  formJug:FormGroup

  @ViewChild('formDato') formDato:NgForm;
  jugador:any;
  dni:String;
  constructor(private fj: FormBuilder) {
    this.jugador = {
      nombre:null,
      apellidos:null,
      dni:null,
      numeroUsuario:null,
      

    }
   }

  ngOnInit() {
    this.iniciarFormulario()
  }
  iniciarFormulario(){
    this.formJug =this.fj.group({
      nombre:[null,Validators.required],
      apellidos:[null,Validators.required],
      dni:["",[Validators.required, Validators.minLength(9)]],
      numeroUsuario:[null,Validators.required],
      
    })
    this.detectarCambios();
  }
  detectarCambios(){
    this.formJug.valueChanges.subscribe(valorForm =>{
      // this.dni= valorForm.dni.starsWith('A')
    })
}
guardarFormulario(){
  this.jugador.nombre = this.formDato.value.nombre;
  this.jugador.apellidos= this.formDato.value.apellidos;
  this.jugador.dni = this.formDato.value.dni;
  this.jugador.numeroUsuario=this.formDato.value.numeroUsuario;
  this.formDato.reset();
  console.log(this.jugador)
}
}
