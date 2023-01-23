import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

empleados : Empleado []=[

  new Empleado ("Juan", "Díaz","Presidente",7500),
  new Empleado ("Ana", "Martín","administrativo",1500),
  new Empleado ("María", "Fernandez","jefa sección",2500),
  new Empleado ("Laura", "lopez","Gestora",3500),
];



}
