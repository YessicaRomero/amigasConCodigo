import * as rls from "readline-sync";
import { Veterinarias } from "./veterinaria";

class Gestora {
 private sucursales: Veterinarias[];

  public constructor (){
   this.sucursales = [];
}
      
   public mostrarListaSucursales(){
    console.log("El contenido de la lista es: ");
    this.sucursales.forEach (sucursal => {console.log(sucursal)})
   };

   public agregarSucursal(sucursal: Veterinarias):void{
    this.sucursales.push(sucursal);
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
      console.log("Sucursal eliminada.")
    } else {
      console.log("Error.Sucursal no eliminada.");  
   }
  } else {
    console.log("Sucursal no encontrada.")
  }
  }
}

var gestora = new Gestora();

var veterinaria01 = new Veterinarias("hola", "adios");
var veterinaria02 = new Veterinarias("ailen", "massa");
gestora.agregarSucursal(veterinaria01);
gestora.agregarSucursal(veterinaria02);
gestora.eliminarSucursal();
gestora.mostrarListaSucursales();