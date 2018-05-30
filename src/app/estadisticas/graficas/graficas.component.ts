import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  chartOptions = {
    responsive: true
  }
  presupuestos:any;
  ptosPrMes:any;
  ptosSgMes:any;
  ptosTrMes:any;
  diaPrMes:any = new Date("2018-04-01").valueOf();
  diaSgMes:any = new Date("2018-05-01").valueOf();
  diaTrMes:any = new Date("2018-06-01").valueOf();
  diaCtMes:any = new Date("2018-07-01").valueOf();
  totalPrMes:number = 150;
  totalSgMes:number = 200;
  totalTrMes:number = 350;
  prMes:string = 'Abril';
  sgMes:string = 'Mayo';
  trMes:string = 'Junio';
  labelTrimestre:string = 'Presupuestos 2º trimestre';
  chartPtosTrimestre:any = [];
  
  constructor() { }

  ngOnInit() {
    this.cargarGraficoPresupuestos()
  }
  primerTrimestre(){
    this.diaPrMes = new Date("2018-01-01").valueOf();
    this.diaSgMes = new Date("2018-02-01").valueOf();
    this.diaTrMes = new Date("2018-03-01").valueOf();
    this.diaCtMes = new Date("2018-04-01").valueOf();
    this.totalPrMes = 100;
    this.totalSgMes = 200;
    this.totalTrMes = 60;
    this.prMes = 'Enero';
    this.sgMes = 'Febrero';
    this.trMes = 'Marzo';
    this.labelTrimestre = 'Presupuestos 1º Trimestre';
    this.chartPtosTrimestre.destroy();
    this.cargarGraficoPresupuestos();
  }
  segundoTrimestre(){
    this.diaPrMes = new Date("2018-04-01").valueOf();
    this.diaSgMes = new Date("2018-05-01").valueOf();
    this.diaTrMes = new Date("2018-06-01").valueOf();
    this.diaCtMes = new Date("2018-07-01").valueOf();
    this.totalPrMes = 150;
    this.totalSgMes = 200;
    this.totalTrMes = 350;
    this.prMes = 'Abril';
    this.sgMes = 'Mayo';
    this.trMes = 'Junio';
    this.labelTrimestre = 'Presupuestos 2º Trimestre';
    this.chartPtosTrimestre.destroy();
    this.cargarGraficoPresupuestos();
  }
  cargarGraficoPresupuestos(){
    this.chartPtosTrimestre = new Chart('grafico1',{
      type: 'line',
      data: {
        labels: [this.prMes,this.sgMes,this.trMes],
        datasets: [
          {
            data: [this.totalPrMes,this.totalSgMes,this.totalTrMes],
            label: this.labelTrimestre,
            borderColor: "#dc143c",
            fill: false
          }
        ] 
      }
    })
  }

}
