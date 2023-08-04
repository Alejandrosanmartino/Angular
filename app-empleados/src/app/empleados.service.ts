import { Empleado } from "./empleado.model";

export class EmpleadosService{
    
  empleados : Empleado []=[
    new Empleado ("Juan", "Díaz","Presidente",7500),
    new Empleado ("Ana", "Martín","administrativo",1500),
    new Empleado ("María", "Fernandez","jefa sección",2500),
    new Empleado ("Laura", "lopez","Gestora",3500),
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.empleados.push(empleado);
  }
}