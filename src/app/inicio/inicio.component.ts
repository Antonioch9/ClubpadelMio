import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  transferData: Object = {id: 1, msg: 'Esta la foto aqui'};
  receivedData: Array<any> = [];

  transferDataSuccess($event: any) {
      this.receivedData.push($event);
      console.log($event)
  }
  constructor() { }

  ngOnInit() {
  }

}
