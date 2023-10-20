

enum animalTypeEnum{
        perro="perro",
        gato="gato",
        otroAnimal= "exotico"
        
    }

export class Mascotas {
    private especie: animalTypeEnum;
    private nombre: string;
    private idDueño : Cliente 
    
 public constructor (especie : animalTypeEnum, nombre : string) {
        this.especie= especie;
        this.nombre = nombre;
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
   this.idDueño = Cliente.
}
}