import * as fs from 'fs';
 
 class Mascotas { 
    private nombre : string;
    private especie : string;
    
    
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
    
     }


     class Cliente { 
        private id : number;
        private nombre : string;
        private telefono : number;
        private visitas : number;
        private listaMascota : Array <Mascotas>;
    
        constructor ( nombre: string, telefono : number, visitas: number, listaMascota : Array<Mascotas>) { 
            this.nombre = nombre;
            this.telefono = telefono;
            this.visitas = visitas;
            this.listaMascota = listaMascota;
         }
       
    
        public getVisitas() : number { 
            return this.visitas;
        }
    
        public getListaMascota() : Array<Mascotas>{ 
            return this.listaMascota;
        }
    
        public clienteVip() : void { 
            if(this.visitas >= 5) { 
                console.log("Con su cantidad de visitas usted es cliente Vip");
            }
        }
    
        public mostrarMascotas() : void { 
            console.log(this.listaMascota);
        }
    
        public setTelefono(celular : number) : void { 
            this.telefono = celular;
        }
    
      }

      class GestorDeArchivos {

        private arregloString: string[];
    
        constructor(txtFileLocation: string) {
    
            let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
            this.arregloString = archivoTxt.split(';');
        
        }
    
        public mostrarArreglo(): void {
            console.log(this.arregloString);
        }
    
        public getArregloString(): string[] {
            return this.arregloString;
        }
    
    }

//Funcion para cargar arreglo mascota 

function cargarArreglo(elemento: string, arr: Array<Mascotas>) : Array<Mascotas> { 
    let datos: string[] = elemento.split(',');
    let nombre: string = datos[0];
    let especie: string = datos[1];

         
    let nuevaMascota : Mascotas = new Mascotas(nombre,especie); 

    arr.push(nuevaMascota);

    return arr;
}


let datosMascota : GestorDeArchivos = new GestorDeArchivos("mascotas.txt");

console.log(datosMascota);

let animal : Array<Mascotas> = [];

for(let i = 0; i <datosMascota.getArregloString.length; i++) { 
    cargarArreglo(datosMascota.getArregloString()[i], animal);
 }
    console.log(animal); 


// funcion crear aleatorio
function crearAleatorio(max : number){ 
    return Math.floor(Math.random()* max)
}


// funcion cargar arreglo cliente


function cargarCliente(elemento: string, arr: Array<Cliente>, listaMascota : Array<Mascotas>) : Array<Cliente> { 
    
    let datos: string[] = elemento.split(',');
    let nombre: string = datos[1];
    let telefono: number = Number(datos[2])
    let visitas : number = Number(datos[3]);
    
    let arrayMascota : Array<Mascotas> = animal;
 

    let nuevoCliente : Cliente = new Cliente(nombre, telefono,visitas, listaMascota); 

    arr.push(nuevoCliente);

    return arr;
}


 let datosClientes : GestorDeArchivos = new GestorDeArchivos("cliente.txt");

 console.log(datosClientes);

 let arrayMascota : Array<Mascotas> = animal
 let listaPersonas : Array<Cliente> = [];

 for(let i = 0; i < datosClientes.getArregloString().length; i++) { 
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas,animal);
 }
 
 let crearId = (letra :string, lista) => {
    let id :string = letra;
    for (let i :number = 0; i < 3; i++){
        let random :number = Math.floor(Math.random() * 10);
        id += random;
    };
    for (let i :number = 0; i < lista.length; i++){
        if (id === lista[i].getId()){
            crearId(lista, letra);
        }
    };

    return id;
}

crearId("c",listaPersonas);