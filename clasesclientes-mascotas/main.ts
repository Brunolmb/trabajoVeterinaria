import * as fs from 'fs';
import Mascotas from './claseMascota';
import Cliente from './claseCliente';
import {cargarArreglo, cargarCliente} from './helpers'
import {crearId} from './claseCliente'

 


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


let datosMascota : GestorDeArchivos = new GestorDeArchivos("mascotas.txt");


console.log(datosMascota);

let animal : Array<Mascotas> = [];



for(let i = 0; i <datosMascota.getArregloString().length; i++) { 
    cargarArreglo(datosMascota.getArregloString()[i], animal);
    

 }

  
 console.log(animal);



 let datosClientes : GestorDeArchivos = new GestorDeArchivos("cliente.txt");

 console.log(datosClientes);


 let listaPersonas : Array<Cliente> = [];

 for(let i = 0; i < datosClientes.getArregloString().length; i++) { 
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas ,animal);
    crearId(listaPersonas);
    
 }
 console.log(listaPersonas);

 



