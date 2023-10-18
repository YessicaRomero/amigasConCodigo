

enum animalTypeEnum{
        perro="perro",
        gato="gato",
        otroAnimal= "exotico"
        
    }

export class Mascotas {
    private especie: animalTypeEnum;
    private nombre: string;
    private dueno : 
    
    public constructor(especie : animalTypeEnum, nombre : string) {
        this.especie= especie;
        this.nombre = nombre;
    }
}