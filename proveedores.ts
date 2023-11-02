export class Proveedores {
    private id: string = (Math.random() +  Date.now()).toString();
    private nombre: string;
    private telefono: string;

    public constructor (nombre:string, telefono:string){
    this.nombre = nombre;
     this.telefono = telefono;
    }
    public    getId(){
        return this.id;
    }
    setNombre(nombre:string) {
     this.nombre = nombre;
    };

    setTelefono(telefono:string) {
     this.telefono = telefono;
    };

    getNombre():string {
     return this.nombre;
    };

    getTelefono():string {
     return this.telefono;
    };
}