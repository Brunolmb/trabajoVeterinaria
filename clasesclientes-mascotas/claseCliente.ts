import Mascotas from "./claseMascota";


export default class Cliente { 
    private id : string;
    private nombre : string;
    private telefono : number;
    private visitas : number;
    private listaMascota : Array <Mascotas>;

    constructor ( nombre: string, telefono : number, visitas: number, id : string, listaMascota : Array<Mascotas>) { 
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = visitas;
        this.listaMascota = listaMascota;
        this.id = id;
         
     }

     public getId() : string { 
        return this.id;
     }
   

    public getVisitas() : number { 
        return this.visitas;
    }

    public getListaMascota() : Array<Mascotas>{ 
        return this.listaMascota;
    }

    public setVisitas(nuevaVisitas) : void {
        this.visitas= nuevaVisitas;
    }
       
    public asignarCliente() {     
        if (this.visitas >= 0 && this.visitas <=5){
            this.setVisitas(`Con 5 visitas usted será cliente VIP. Lleva ${this.visitas} Visitas. Lo esperamos pronto`);
        }else{ 
            this.setVisitas(`Ha alcanzado las 5 visitas. Felicidades usted es un cliente VIP`);
        }
    
    }


    public mostrarMascotas() : void { 
        console.log(this.listaMascota);
    }

    public setTelefono(celular : number) : void { 
        this.telefono = celular;
    }

  };

  export function crearId( lista) {
    let id :string = " ";
    for (let i :number = 0; i < 3; i++){
        let random :number = Math.floor(Math.random() * 10);
        id += random;
     } 
     
    for (let i :number = 0; i < lista.length; i++){
        if (id === lista[i].getId()){
            crearId(lista);
        }
     }

    return id; 
};