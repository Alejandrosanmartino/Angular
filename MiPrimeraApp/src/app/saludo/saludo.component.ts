import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {


mensaje: string;
identifParrafo:string;
habilitacionCuadro=false;
empresa="pepe";

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
//   cambiaEmpresa(event: Event){
// this.empresa=(<HTMLInputElement>event.target).value;

//   }
}
