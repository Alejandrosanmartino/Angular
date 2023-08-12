import { Component } from '@angular/core';
import { Empleado } from './empleado.modelo';
import { EmpleadoService } from './prueba-empelado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empleados: Empleado[] = [];
  titulo:string="Listado de empleados";

  constructor(private empleadoService: EmpleadoService) {}

  agregarEmpleados() {
    const empleado1 = new Empleado("Juan", "Perez", "Desarrollador", 50000);
    const empleado2 = new Empleado("María", "González", "Diseñadora", 45000);
    const empleado3 = new Empleado("Carlos", "Martínez", "Gerente", 80000);

    this.empleadoService.agregarEmpleado(empleado1);
    this.empleadoService.agregarEmpleado(empleado2);
    this.empleadoService.agregarEmpleado(empleado3);

    this.obtenerEmpleados();
  }

  obtenerEmpleados() {
    this.empleados = this.empleadoService.obtenerEmpleados();
  }
}




