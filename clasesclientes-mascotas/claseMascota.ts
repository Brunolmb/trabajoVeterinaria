export default class Mascotas { 
    protected nombre : string;
    protected especie : string;
    
    
    constructor (nombre: string, especie: string) { 
        this.nombre = nombre;
        this.especie = especie;
         }
    
    public getNombre() : string { 
            return this.nombre;
        }
    
    public getEspecie() : string { 
            return this.especie;
        }
    
    public setEspecie(nuevaEspecie: string) : void { 
        this.especie = nuevaEspecie;
    }
        
    public asignarEspecie() {

            if (this.especie === "perro" || this.especie === "gato"){
                console.log (this.especie)
            } else  { 
                this.setEspecie("exótica");
            }
        }
      }


 