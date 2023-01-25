import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
titulo = 'Registro de Usuarios';
mensaje:string ="";
edad:number=0;
registrado=false;
nombre:string="";
apellido:string="";
cargo:string="";
entradas:any=[];

constructor(){

  this.entradas=[
    {titulo:"Phyton cada día más presente"},
    {titulo:"Java siempre presente"},
    {titulo:"JavaScript cada vez más funcional"},
    {titulo:"Kotlin potencia para tus apps"},
    {titulo:"Dónde quedó Pascal?"},
  ]


}


registrarUsuario (){
this.registrado=true;
this.mensaje = "Usuario registrado con éxito!!";

}




}
