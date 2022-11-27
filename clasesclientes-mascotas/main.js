"use strict";
exports.__esModule = true;
var fs = require("fs");
var Mascotas = /** @class */ (function () {
    function Mascotas(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    Mascotas.prototype.getNombre = function () {
        return this.nombre;
    };
    Mascotas.prototype.getEspecie = function () {
        return this.especie;
    };
    Mascotas.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
    };
    Mascotas.prototype.asignarEspecie = function () {
        if (this.especie === "perro" || this.especie === "gato") {
            console.log(this.especie);
        }
        else {
            this.setEspecie("exótica");
        }
    };
    return Mascotas;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, visitas, id, listaMascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = visitas;
        this.listaMascota = listaMascota;
        this.id = id;
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascota;
    };
    Cliente.prototype.setVisitas = function (nuevaVisitas) {
        this.visitas = nuevaVisitas;
    };
    Cliente.prototype.asignarCliente = function () {
        if (this.visitas >= 0 && this.visitas <= 5) {
            this.setVisitas("Con 5 visitas usted ser\u00E1 cliente VIP. Lleva ".concat(this.visitas, " Visitas. Lo esperamos pronto"));
        }
        else {
            this.setVisitas("Ha alcanzado las 5 visitas. Felicidades usted es un cliente VIP");
        }
    };
    Cliente.prototype.mostrarMascotas = function () {
        console.log(this.listaMascota);
    };
    Cliente.prototype.setTelefono = function (celular) {
        this.telefono = celular;
    };
    return Cliente;
}());
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
//Funcion para cargar arreglo mascota 
function cargarArreglo(elemento, arr) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var especie = datos[1];
    var nuevaMascota = new Mascotas(nombre, especie);
    arr.push(nuevaMascota);
    nuevaMascota.asignarEspecie();
    return arr;
}
var datosMascota = new GestorDeArchivos("mascotas.txt");
console.log(datosMascota);
var animal = [];
for (var i = 0; i < datosMascota.getArregloString().length; i++) {
    cargarArreglo(datosMascota.getArregloString()[i], animal);
}
console.log(animal);
// funcion cargar arreglo cliente
function cargarCliente(elemento, arr, animal) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var visitas = Number(datos[2]);
    var nuevoCliente = new Cliente(nombre, telefono, visitas, crearId(arr), animal);
    arr.push(nuevoCliente);
    nuevoCliente.asignarCliente();
    return arr;
}
var crearId = function (lista) {
    var id = " ";
    for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 10);
        id += random;
    }
    for (var i = 0; i < lista.length; i++) {
        if (id === lista[i].getId()) {
            crearId(lista);
        }
    }
    return id;
};
var datosClientes = new GestorDeArchivos("cliente.txt");
console.log(datosClientes);
var listaPersonas = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas, animal);
    crearId(listaPersonas);
}
console.log(listaPersonas);
