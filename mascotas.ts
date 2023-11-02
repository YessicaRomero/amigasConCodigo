import { Clientes } from "./clientes";


export enum animalTypeEnum{
        perro="perro",
        gato="gato",
        otroAnimal= "exotico"
        
    }

export class Mascotas {
    private especie: animalTypeEnum;
    private nombre: string;
    private idDueño : string
    
 public constructor (especie : animalTypeEnum, nombre : string, dueño: Clientes) {
      this.especie= especie;
      this.nombre = nombre;
      this.idDueño = dueño.getId()         
    }
 public getEspecie(): string {
    return this.especie;
 }
 public getNombre() : string {
    return this.nombre;
 }
 public setNombre(nombre: string){
    this.nombre = nombre;
}
public getId (){
   return this.idDueño;
}

}

