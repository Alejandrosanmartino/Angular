import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string='Alejandro lópez';
  edad:number=40;
  sueldos=[1000,1200,1500]


aumentarEdad(){
  this.edad++;
}

decrementarEdad(){
  this.edad=this.edad-1;
}

mostrarNombre(){

  console.log(this.nombre);
}
// calcularEdad(nombre: string, edad:number){

// return "El nombre es: " +nombre +" y tiene una edad de "+edad;

// }

}
