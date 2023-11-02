import { Mascotas } from "./mascotas";
import { Proveedores } from "./proveedores";
import { Clientes } from "./clientes";
import * as rls from "readline-sync";



export class Veterinarias {
    private id: string = (Math.random() +  Date.now()).toString();
    private nombre: string;
    private direccion: string;
    private proveedores: Proveedores[];
    private clientes: Clientes[];
    private pacientes: Mascotas[];

    constructor(nombre: string, direccion: string) {
    this.nombre = nombre;
     this.direccion = direccion ;
     this.proveedores = [];
     this.clientes = [];
     this.pacientes = [];
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
    const resultados = this.clientes;
    if (resultados) {
      console.log(`===LISTA DE CLIENTES de "${this.getNombre()}"==`);
      if (!this.clientes.length) {
        console.log("no se encontro el cliente \n");
      } else {
        this.clientes.forEach((cl) => {
          console.log(`
        ------------------
        ID: ${cl.getId()}
        Nombre: ${cl.getNombre()}
        Telefono: ${cl.getTel()}
        Visitas: ${cl.getVisitas()}
        Cliente Vip: ${cl.EsVip()}
        mascotas : ${cl.verMascotas()}
        ------------------
               
        `)
        });
      }
    }
    rls.keyInPause("\n");

};
public leerListaProveedores(){
    const resultados = this.proveedores;
    if (resultados) {
      console.log(`===LISTA DE PROVEEDORES DE ${this.getNombre()}==`);
      if (!this.proveedores.length) {
        console.log("no se encontro el provedor \n");
      } else {
        this.proveedores.forEach((prov) => {
          console.log(`
        ------------------
        ID: ${prov.getId()}
        Nombre: ${prov.getNombre()}
        Telefono: ${prov.getTelefono()}
       
        ------------------
               
        `);
        });
      }
    }
    rls.keyInPause("\n");
};
public leerlistaPacientes(){
    const resultados = this.pacientes;
    if (resultados) {
      console.log(`===LISTA DE PACIENTES ${this.getNombre()}==`);
      if (!this.pacientes.length) {
        console.log("no se encontro el paciente \n");
      } else {
        this.pacientes.forEach((pac) => {
          console.log(`
        ------------------
        ID: ${pac.getId()}
        Nombre: ${pac.getNombre()}
        Especie: ${pac.getEspecie()}
       
        ------------------
               
        `);
        });
      }
    }
    rls.keyInPause("\n");

};
public agregarPaciente(paciente : Mascotas) : void {
    this.pacientes.push(paciente);
    console.log(`===paciente registrado en veterinaria ${this.getNombre()}===`);
    
    
  };
public agregarClientes(cliente : Clientes): void {
    this.clientes.push(cliente);
    console.log(`===cliente registrado en veterinaria ${this.getNombre()}===`);
    cliente.sumarVisitas();
  };
public agregarProveedores(proveedor: Proveedores): void {
    this.proveedores.push(proveedor);
    console.log(`===proveedor registrado en veterinaria ${this.getNombre()}===`);
    
  };
public eliminarClientes(){
    console.log(`===BORRAR CLIENTE DE LA LISTA ${this.getNombre()}=== \n`);
      const IdClienteABorrar = rls.question("ingrese el id del cliente a borrar:");
      const ClienteIndex = this.clientes.findIndex(
        (cli) => cli.getId() === IdClienteABorrar
      );

      if (ClienteIndex !== -1) {
        this.clientes.splice(ClienteIndex, 1);
        console.log("cliente eliminado");
          this.leerListaClientes();
        } else {
          console.log("Cliente no eliminado. \n");
        }
     
      rls.keyInPause();
     } 

public eliminarPacientes(){
  console.log(`===BORRAR PACIENTE DE LA LISTA ${this.getNombre()}=== \n`);
      const IdPacABorrar = rls.question("ingrese el id del paciente a borrar:");
      const PacIndex = this.pacientes.findIndex(
        (pac) => pac.getId() === IdPacABorrar
      );

      if (PacIndex !== -1) {
        this.pacientes.splice(PacIndex, 1);
        console.log("Paciente eliminado");
          this.leerlistaPacientes();
        } else {
          console.log("Paciente no eliminado. \n");
        }
     
      rls.keyInPause();
};
public eliminarProveedores(){
  console.log(`===BORRAR PROOVEDOR DE LA LISTA ${this.getNombre()}=== \n`);
      const IdProvABorrar = rls.question("ingrese el id del proveedor a borrar:");
      const ProvIndex = this.proveedores.findIndex(
        (prov) => prov.getId() === IdProvABorrar
      );

      if (ProvIndex !== -1) {
        this.proveedores.splice(ProvIndex, 1);
        console.log("proveedor eliminado");
          this.leerListaProveedores();
        } else {
          console.log("proveedor no eliminado. \n");
        }
     
      rls.keyInPause();
};

}
