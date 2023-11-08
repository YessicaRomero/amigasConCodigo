import { Mascotas } from "./mascotas";
import { animalTypeEnum } from "./mascotas";


  export class Clientes{
    private name:string ;
    private tel : number;
    private id :string = (Math.random() + Date.now()).toString();
    private visitas: number = 0;
    private esvip = false;
    private mascotasdeCliente : Mascotas[] = [] ;
   
    constructor(name: string, tel : number){
        this.name = name;
        this.tel = tel;
        this.mascotasdeCliente= [];
     
    }
    public  getNombre(){
        return this.name
      }
    public  getTel(){
        return this.tel;
      }
    public   getId(){
            return this.id;
        }
    public   getVisitas(){
            return this.visitas
        }
    public sumarVisitas(){
            this.visitas++;
            if(this.visitas >= 5){
                this.esvip = true;
            } 
        }   
    public   setName(name:string){
            this.name = name;
        }
    public  setTel(tel:number){
            this.tel = tel;
        }
    public EsVip(): boolean{
        return this.esvip
        }
    public VincularMascota(mascota: Mascotas) {
      if(mascota.getId() === this.id){
    this.mascotasdeCliente.push(mascota);
    console.log("mascota vinculada");}
    
       else {
        console.log("el id no es igual al del dueño que quiere agregar.");
        
       }
   
}
public verMascotas(): string {
    
    
    let nombresMascotas = '';
  
    for (const mas of this.mascotasdeCliente) {
      nombresMascotas += mas.getNombre() + ', ';
    }
  
    // Elimina la coma adicional al final y devuelve la cadena
    return nombresMascotas.slice(0, -2);
  }

}   
