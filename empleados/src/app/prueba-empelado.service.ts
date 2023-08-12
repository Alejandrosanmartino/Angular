
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.modelo';

@Injectable({
  providedIn: 'root' // Esto proporciona el servicio a nivel de la aplicación
})
export class EmpleadoService {
private empleados: Empleado[] = [];

constructor() {
    // Puedes inicializar empleados aquí si es necesario
}
agregarEmpleado(empleado: Empleado) {
    this.empleados.push(empleado);}

obtenerEmpleados() {
    return this.empleados;
}
}
