class Clientes{
    private name:string ;
   private tel : number;
    private id :string = (Math.random() + Date.now()).toString();
    private visitas: number = 0;
    private vip: boolean ;

    constructor(name: string, tel : number, vip: boolean){
        this.name = name;
        this.tel = tel;
        this.id;
        this.vip = false;
    }
      getNombre(){
        return this.name
      }  
      getTel(){
        return this.tel;
      }
        getId(){
            return this.id;
        }
        getVisitas(){
            return this.visitas
        }
        setName(name:string){
            this.name = name;
        }
        setTel(tel:number){
            this.tel = tel;
        }
        public isVip(visitas: number){
            if(visitas >= 5){
                this.vip = true;
            console.log(`${this.getNombre}, es usuario Vip`)
            }
        }
}