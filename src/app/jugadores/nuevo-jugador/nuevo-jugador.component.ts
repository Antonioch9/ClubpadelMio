import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-jugador',
  templateUrl: './nuevo-jugador.component.html',
  styleUrls: ['./nuevo-jugador.component.css']
})
export class NuevoJugadorComponent implements OnInit {
  formJug: FormGroup


  nacionalidades: String[] = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
    "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
    "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"]
  niveles: String[] = [
    "Principiante", "Medio", " Alto",
  ]
  @ViewChild('formDato') formDato: NgForm;
  context: CanvasRenderingContext2D;
  @ViewChild("myCanvas") mycambas

  //objeto para el checkbox
  marcable = {
    gimnasio: false,
    padel: false,
    padelGimnasio: false,
    bonogimnasio:false,
    bonomasaje:false,
    bonopadel:false
  }


  //fin de objeto para el checkbox

  jugador: any;
  dni: String;

  constructor(private fj: FormBuilder, ) {
    this.jugador = {
      nombre: null,
      apellidos: null,
      dni: null,
      pasaporte: null,
      nacionalidad: null,
      nivel: null,
      id: null,
      numeroTarjeta: null,
      numeroUsuario: null,
      // gimnasio:false,
      // padel:null,
      // padelGimnasio:null

    }
  }

  ngOnInit() {
    this.iniciarFormulario()
  }
  seleccionar(){
    console.log(this.marcable)
  }
  iniciarFormulario() {
    this.formJug = this.fj.group({
      nombre: [null, Validators.required],
      apellidos: [null, Validators.required],
      dni: ["", [Validators.required, Validators.minLength(9)]],
      pasaporte: [null, Validators.required],
      nacionalidad:[null,Validators.required],
      nivel:[null,Validators.required],
      id:[null,Validators.required],
      numeroTarjeta:[null,Validators.required],
      numeroUsuario:[null,Validators.required],
  
    })
    this.detectarCambios();
  }
  detectarCambios() {
    this.formJug.valueChanges.subscribe(valorForm => {
      // this.dni= valorForm.dni.starsWith('A')
    })

  }
  // Metodo pra visualizar el precargado de la imagen
  preview(e: any): void {
    let canvas = this.mycambas.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, 300, 300)
    var render = new FileReader();
    render.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0)
      };
      // img.src= event.target.result;
    }
    render.readAsDataURL(e.target.files[0]);
    console.log(this.preview)
  }

  guardarFormulario() {
    this.jugador.nombre = this.formDato.value.nombre;
    this.jugador.apellidos = this.formDato.value.apellidos;
    this.jugador.dni = this.formDato.value.dni;
    this.jugador.pasaporte = this.formDato.value.pasaporte;
    this.jugador.nacionalidad = this.formDato.value.nacionalidad;
    this.jugador.nivel = this.formDato.value.nivel;
    this.jugador.id = this.formDato.value.id;
    this.jugador.numeroTarjeta = this.formDato.value.numeroTarjeta;
    this.jugador.numeroUsuario = this.formDato.value.numeroUsuario;
    this.formDato.reset();
    console.log(this.jugador)
  }

}
