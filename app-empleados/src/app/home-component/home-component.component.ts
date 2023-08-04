import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';
  entradas:any[];
  prueba:boolean=true; 

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  nombre:string;
  edad:number; 

  empleados : Empleado []=[
  new Empleado ("Juan", "Díaz","Presidente",7500),
  new Empleado ("Ana", "Martín","administrativo",1500),
  new Empleado ("María", "Fernandez","jefa sección",2500),
  new Empleado ("Laura", "lopez","Gestora",3500),
];

constructor() {
    this.entradas = [
      { titulo: "Arqueología" },
      { titulo: "Palentología" },
      { titulo: "Traceología" },
      { titulo: "Ruinas" },
      { titulo: "Ovnis" }
    ];
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


agregarEmpleado(){

    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);

}}

