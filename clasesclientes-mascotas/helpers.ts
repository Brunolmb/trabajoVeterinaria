import Mascotas from "./claseMascota";
import Cliente from "./claseCliente";
import { crearId } from "./claseCliente";



export function cargarArreglo(elemento: string, arr: Array<Mascotas>) : Array<Mascotas> { 
    let datos: string[] = elemento.split(',');
    let nombre: string = datos[0];
    let especie: string = datos[1];

         
    let nuevaMascota : Mascotas = new Mascotas(nombre,especie); 

    arr.push(nuevaMascota);
    nuevaMascota.asignarEspecie();
   

    return arr;
}

export function cargarCliente(elemento: string, arr: Array<Cliente>, animal : Array<Mascotas>) : Array<Cliente> { 
    
    let datos: string[] = elemento.split(',');
    let nombre: string = datos[0];
    let telefono: number = Number(datos[1]);
    let visitas : number = Number(datos[2]);

    
     let nuevoCliente : Cliente = new Cliente (nombre, telefono,visitas,crearId(arr), animal);
    

    arr.push(nuevoCliente);
     nuevoCliente.asignarCliente();
   

    return arr;
}

