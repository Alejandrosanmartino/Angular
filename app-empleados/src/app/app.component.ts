import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';
  entradas:any[];
  prueba:boolean=true; 

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  nombre:string;
  edad:number; 

  empleados : Empleado []=[];





constructor(private empleadosService:EmpleadosService) {
  this.empleados= this.empleadosService.empleados;
    this.entradas = [
      { titulo: "Arqueología" },
      { titulo: "Palentología" },
      { titulo: "Traceología" },
      { titulo: "Ruinas" },
      { titulo: "Ovnis" }
    ];
    
  }


agregarEmpleado(){

    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
  this.empleadosService.agregarEmpleadoServicio(miEmpleado);
}



}
