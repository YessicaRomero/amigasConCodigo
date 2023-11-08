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
    this.sucursales.forEach (sucursal => {
      const sucursalString = JSON.stringify(sucursal, null, 2);
      console.log(sucursalString)})
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
      
    } else {
      console.log("Error.Sucursal no eliminada.");  
   }
  } else {
    console.log("Sucursal no encontrada.")
  }
   }


  menu(){
    while(true){
    console.clear();
    console.log("Menu de Sucursales")
    const choice = rls.keyInSelect(this.menuOpcion)
    switch(choice){
        case 0 :
        this.mostrarListaSucursales()
        break
        case 1 :
          this.eliminarSucursal()
            break;
                  default:
                    console.log("GRACIAAAS :)")
                    return;
    }
  }
}
menuOpcion = ["lista Sucursales", "Eliminar Sucursal" ]
}
  


const gestora = new Gestora();

//instanciamos clientes
const cliente1 = new Clientes("Luna",344645)
const cliente02 = new Clientes("Yessica",2245789)
const cliente03 = new Clientes("Ailen", 290876438)
const cliente04 = new Clientes("Lucas", 2908438)


//instanciamos mascotas
const Masc01 = new Mascotas(animalTypeEnum.gato,"Lolo",cliente1);
const Mas02 = new Mascotas(animalTypeEnum.perro,"Vera",cliente03);
const Mas03 = new Mascotas(animalTypeEnum.otroAnimal,"Mora",cliente02);
const Mas04 = new Mascotas(animalTypeEnum.gato,"Bigotes",cliente03);
//instanciamos proveedores
const pr01 = new Proveedores("Guadalupe","22548645");
const pr02 = new Proveedores("Ailen","25469854")

//instanciamos veterinarias
const veterinaria01 = new Veterinarias("Animaladas","Ugarte 675");
const veterinaria02 = new Veterinarias("PetShop", "Pedro N. Carrera 671");

// agregamos clientes
veterinaria01.agregarClientes(cliente1)
veterinaria01.agregarClientes(cliente02)
veterinaria02.agregarClientes(cliente03)
veterinaria02.agregarClientes(cliente04)

// agregamos pacientes
veterinaria01.agregarPaciente(Masc01)
veterinaria01.agregarPaciente(Mas03)
veterinaria02.agregarPaciente(Mas02)
veterinaria02.agregarPaciente(Mas04)

// agregamos proveedores
veterinaria01.agregarProveedores(pr01)
veterinaria02.agregarProveedores(pr02)

// vinculamos clientes y mascotas
cliente03.VincularMascota(Mas04)
cliente03.VincularMascota(Mas02)
cliente1.VincularMascota(Masc01)
cliente02.VincularMascota(Mas03)

// verificacion de IDs
cliente02.VincularMascota(Mas02)

veterinaria01.menu()
veterinaria02.menu()

// cambiamos un cliente a VIP
cliente02.sumarVisitas()
cliente02.sumarVisitas()
cliente02.sumarVisitas()
cliente02.sumarVisitas()

veterinaria01.leerListaClientes()

// Agregamos sucursales a la red
gestora.agregarSucursal(veterinaria01);
gestora.agregarSucursal(veterinaria02);
gestora.menu()











