import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nuevo formulario Ngif';


registro: string="";
registrado:boolean=false;
nombre:string="";
edad:number=0;
entradas:any[];

constructor(){

  this.entradas=[
    {titulo:"Python"},
    {titulo:"Java"},
    {titulo:"JavaScript"},
    {titulo:"Kotlin"},
  ]
}


registroUsu(){

this.registrado=true;
this.registro="Usuario Registrado con éxito"; 

}

}
