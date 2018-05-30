import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @ViewChild('MyRef') element: ElementRef;
  @ViewChild('formRese') formRese:NgForm 
  @ViewChild('formReser') formReser:NgForm 
  @ViewChild('formReserv') formReserv:NgForm 
  @ViewChild('formReserva') formReserva:NgForm 
  @ViewChild('formReserva5') formReserva5:NgForm 
  @ViewChild('formReserva6') formReserva6:NgForm 
  @ViewChild('formReserva7') formReserva7:NgForm
  @ViewChild('formReserva8') formReserva8:NgForm
  @ViewChild('formReserva9') formReserva9:NgForm
  @ViewChild('formReserva10') formReserva10:NgForm
  reserva:any;
  titulo:any={
    p1:'my Guide Marbella',
    p2:'La habana',
    p3:'Royale Grass',
    p4:'Da Bruno',
    p5:'Fanautic Club',
    p6:'X-Magazine',
    p7:'Cuisin Electro',
    p8:'Optimasit',
    p9:'Heaven Beach Club',
    p10:'Estrella Dawn'
  }
  entrada:object=new Date()
   

  
  

ngAfterViewInit() {
      console.log(this.element);
}
  
  transferData: Object = {id: 1, msg: 'Esta la foto aqui'};
  receivedData: Array<any> = [];
  

  transferDataSuccess($event: any) {
      this.receivedData.push($event);
      console.log($event)
  }
  constructor() {
    this.reserva={
      fechaEntrada:null,
      fechaSalida:null,
      titulo:null
    
    }
   }

  ngOnInit() {
    
  }
  
  guardarReserva(){
    this.reserva.fechaEntrada=this.formRese.value.fechaEntrada;
    this.reserva.fechaSalida=this.formRese.value.fechaSalida;
    this.reserva.titulo=this.formRese.value.titulo;
    
    console.log(this.reserva)
  }
  guardarReservar(){
    this.reserva.fechaEntrada=this.formReser.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReser.value.fechaSalida;
    this.reserva.titulo=this.formReser.value.titulo;
   
    console.log(this.reserva)
  }
  guardarReservar3(){
    this.reserva.fechaEntrada=this.formReserv.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserv.value.fechaSalida;
    this.reserva.titulo=this.formReserv.value.titulo;
    
    console.log(this.reserva)
  }
  guardarReservar4(){
    this.reserva.fechaEntrada=this.formReserva.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva.value.fechaSalida;
    this.reserva.titulo=this.formReserva.value.titulo;
    console.log(this.reserva)
  }
  guardarReservar5(){
    this.reserva.fechaEntrada=this.formReserva5.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva5.value.fechaSalida;
    this.reserva.titulo=this.formReserva5.value.titulo;
    console.log(this.reserva)
  }
  guardarReservar6(){
    this.reserva.fechaEntrada=this.formReserva6.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva6.value.fechaSalida;
    this.reserva.titulo=this.formReserva6.value.titulo;
    console.log(this.reserva)
  }
  guardarReservar7(){
    this.reserva.fechaEntrada=this.formReserva7.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva7.value.fechaSalida;
    this.reserva.titulo=this.formReserva7.value.titulo;
    console.log(this.reserva)
  }
  guardarReservar8(){
    this.reserva.fechaEntrada=this.formReserva8.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva8.value.fechaSalida;
    this.reserva.titulo=this.formReserva8.value.titulo;
    console.log(this.reserva)
  }
  guardarReservar9(){
    this.reserva.fechaEntrada=this.formReserva9.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva9.value.fechaSalida;
    this.reserva.titulo=this.formReserva9.value.titulo;
    console.log(this.reserva)
  }
  guardarReservar10(){
    this.reserva.fechaEntrada=this.formReserva10.value.fechaEntrada;
    this.reserva.fechaSalida=this.formReserva10.value.fechaSalida;
    this.reserva.titulo=this.formReserva10.value.titulo;
    console.log(this.reserva)
  }
}
