import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {


mensaje: string;
identifParrafo:string;


  constructor() { 
  this.mensaje="saludos terrícola";
  this.identifParrafo="parrafoPrincipal";

  setTimeout(()=> {
    this.mensaje='otro mensaje diferente';
  },3000);
  }


  ngOnInit(): void {
  }

  mostrarSaludo():string{

    return 'Hola este es otro saludo';
  }


}
