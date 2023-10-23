import { Mascotas } from "./mascotas";
import { Proveedores } from "./proveedores";
import { Clientes } from "./clientes";

export class Veterinarias {
    private id: string = (Math.random() +  Date.now()).toString();
    private nombre: string;
    private direccion: string;
    private proveedor: Proveedores[];
    private cliente: Clientes[];
    private paciente: Mascotas[];

    constructor(nombre: string, direccion: string) {
     this.nombre = nombre;
     this.direccion = direccion ;
     this.proveedor = [];
     this.cliente = [];
     this.paciente = [];
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

public leerListaClientes(){
     console.log("El contenido de la lista es: ");
    this.cliente.forEach (cliente => {console.log(cliente)})
};

public leerListaProveedores(){
    console.log("El contenido de la lista es: ");
    this.proveedor.forEach (proovedor => {console.log(proovedor)})
};

public leerlistaMascotas(){
    console.log("El contenido de la lista es: ");
    this.paciente.forEach (paciente => {console.log(paciente)})
};

public agregarMascotas(paciente:Mascotas){
    this.paciente.push(paciente);
};
public agregarClientes(cliente:Clientes){
    this.cliente.push(cliente);
};
public agregarProveedores(proovedor:Proveedores){
    this.proveedor.push(proovedor);
};

    public eliminarDatos(){

    }
 
    public sumarVisita(){
        
    }
}

