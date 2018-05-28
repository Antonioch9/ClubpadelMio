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
      titulo:null,
      titulo2:null,
    
    }
   }

  ngOnInit() {
    
  }
  
  guardarReserva(){
    this.reserva.fechaEntrada=this.formRese.value.fechaEntrada;
    this.reserva.fechaSalida=this.formRese.value.fechaSalida;
    this.reserva.titulo=this.formRese.value.titulo;
    this.reserva.titulo2=this.formRese.value.titulo2;
    console.log(this.reserva)
  }
  
}
