import { Proveedores } from "./proveedores";
// import {  } from "";
// import {  } from "";

export class Veterinarias {
    private id: string = (Math.random() +  Date.now()).toString();
    private nombre: string;
    private direccion: string;
    private proveedor: Proveedores[];
    private cliente: Clientes[];
    private paciente: Pacientes[];

    constructor(nombre: string, direccion: string) {
     nombre = this.nombre;
     direccion = this.direccion;
    }

    getId(){
     return this.id;
    }

    getNombre(){
     return this.nombre;
    }

    getDireccion(){
     return this.direccion;
    }

    darDeAlta(){

    }

    eliminarDatos(){

    }

    modificar(){

    }
}