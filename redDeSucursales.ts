import * as rls from "readline-sync";
import { Veterinarias } from "./veterinaria";
import { animalTypeEnum, Mascotas } from "./mascotas";
import { Proveedores } from "./proveedores";
import { Clientes } from "./clientes";

class Gestora {
 private sucursales: Veterinarias[];

  public constructor (){
   this.sucursales = [];
}
   

   public mostrarListaSucursales(){
    console.log("El contenido de la lista es: ");
    this.sucursales.forEach (sucursal => {console.log(sucursal)})
    rls.keyInPause();
   };

   public agregarSucursal(sucursal: Veterinarias):void{
    this.sucursales.push(sucursal);
    rls.keyInPause();
   };

   public eliminarSucursal(){
    console.log("---Eliminar Sucursal---");
    const vetBorrar = rls.question("Ingrese el id de la veterinaria que desea eliminar: ");
    const vetIndex = this.sucursales.findIndex(
      (vet) => vet.getId() === vetBorrar
    );

    if (vetIndex !== -1) {
     const vetBorrar =this.sucursales[vetIndex];
     const confirmado = rls.keyInYN(
      `desea eliminar la sucursal ${vetBorrar.getNombre()}? (Y/N)`
     );
     
      if (confirmado) {
      this.sucursales.splice(vetIndex, 1);
      console.log("Sucursal eliminada.");
      this.mostrarListaSucursales();
    } else {
      console.log("Error.Sucursal no eliminada.");  
   }
  } else {
    console.log("Sucursal no encontrada.")
  }
  }
}

let gestora = new Gestora();
//clientes
const cliente1 = new Clientes("luna",344645)
const cliente02 = new Clientes("yessica",2245789)

//mascotas
const Masc01 = new Mascotas(animalTypeEnum.gato,"lolo",cliente1);
const Mas02 = new Mascotas(animalTypeEnum.perro,"vera",cliente02);

//proveedores
const pr01 = new Proveedores("guadalupe","22548645");
const pr02 = new Proveedores("ailen","25469854")

// veterinarias
const veterinaria01 = new Veterinarias("hola", "adios");
const veterinaria02 = new Veterinarias("ailen", "massa");

veterinaria01.agregarClientes(cliente1)
veterinaria02.agregarClientes(cliente02)
veterinaria01.leerListaClientes();
veterinaria02.leerListaClientes()

veterinaria01.agregarPaciente(Masc01)
veterinaria02.agregarPaciente(Mas02)
veterinaria01.leerlistaPacientes()
veterinaria02.leerlistaPacientes()

veterinaria01.agregarProveedores(pr01)
veterinaria02.agregarProveedores(pr02)
veterinaria01.leerListaProveedores()
veterinaria02.leerListaProveedores()


cliente1.VincularMascota(Masc01)
cliente1.VincularMascota(Mas02)
veterinaria01.leerListaClientes();


gestora.agregarSucursal(veterinaria01);
gestora.agregarSucursal(veterinaria02);
//gestora.mostrarListaSucursales();
//cliente02.sumarVisitas()
//cliente02.sumarVisitas()
//cliente02.sumarVisitas()
//cliente02.sumarVisitas()

//veterinaria02.leerListaClientes()
//gestora.mostrarListaSucursales();


//eliminar
//veterinaria01.leerListaClientes()
//veterinaria01.eliminarClientes()

//veterinaria01.leerListaProveedores()
//veterinaria01.eliminarProveedores()

//veterinaria01.leerlistaPacientes()
//veterinaria01.eliminarPacientes()

//gestora.mostrarListaSucursales()

//gestora.eliminarSucursal(veterinaria01)

gestora.mostrarListaSucursales();



