import { Mascotas } from "./mascotas";

class Clientes{
    private name:string ;
    private tel : number;
    private id :string = (Math.random() + Date.now()).toString();
    private visitas: number = 0;
    private esvip: boolean = false;
    private mascotas : Mascotas[]

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
    public    getId(){
            return this.id;
        }
    public    getVisitas(){
            return this.visitas
        }
    public    setName(name:string){
            this.name = name;
        }
    public    setTel(tel:number){
            this.tel = tel;
        }
    public EsVip(): boolean{
        return this.esvip
        
        }
    public MarcarEsVip () : boolean {
        return this.esvip = true;
    }
    public MarcarNoEsVip () : boolean {
        return this.esvip = false;
    }  
    public incrementadorDeVisitas() {
        return this.visitas + 1 ;
    }
}