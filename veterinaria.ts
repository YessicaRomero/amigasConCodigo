import { Mascotas } from "./mascotas";
import { Proveedores } from "./proveedores";
import { Clientes } from "./clientes";

export class Veterinarias {
    private id: string = (Math.random() +  Date.now()).toString();
    private nombre: string;
    private direccion: string;
    private proveedor: Proveedores[];
    private cliente: Clientes[];
    private pasiente: Mascotas[];

    constructor(nombre: string, direccion: string) {
     nombre = this.nombre;
     direccion = this.direccion;
     this.proveedor = [];
     this.cliente = [];
     this.pasiente = [];
    }

public getId(): string {
     return this.id;
    }

public getNombre() : string{
     return this.nombre;
    }

public getDireccion() : string {
     return this.direccion;
    }
public setNombre(nombre: string){
    this.nombre= nombre;
}

public setDireccion(dir: string){
    this.direccion= dir;
}

public leerListaClientes(){};
public leerListaProveedores(){};
public leerlistaMascotas(){};
public agregarMascotas(){};
public agregarClientes(){};
public agregarProveedores(){};

eliminarDatos(){

    }

}