import { Mascotas } from "./mascotas";
  export class Clientes{
    private name:string ;
    private tel : number;
    private id :string = (Math.random() + Date.now()).toString();
    private visitas: number = 0;
    private esvip = false;
    private mascotasdeCliente : Mascotas[] = [];
    constructor(name: string, tel : number){
        this.name = name;
        this.tel = tel;
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
        public agregarMascota(mascota:Mascotas) {
            this.mascotasdeCliente.push(mascota);
        }
}
const cliente1 = new Clientes("luna",344645)
console.log(cliente1);
cliente1.sumarVisitas();
cliente1.sumarVisitas();
cliente1.sumarVisitas();
cliente1.sumarVisitas();
cliente1.sumarVisitas();
cliente1.sumarVisitas();
console.log(cliente1);
