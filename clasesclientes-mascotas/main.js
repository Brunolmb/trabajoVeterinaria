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
    return Mascotas;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, visitas, listaMascota) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = visitas;
        this.listaMascota = listaMascota;
    }
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascota;
    };
    Cliente.prototype.clienteVip = function () {
        if (this.visitas >= 5) {
            console.log("Con su cantidad de visitas usted es cliente Vip");
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
    return arr;
}
var datosMascota = new GestorDeArchivos("mascotas.txt");
console.log(datosMascota);
var animal = [];
for (var i = 0; i < datosMascota.getArregloString.length; i++) {
    cargarArreglo(datosMascota.getArregloString()[i], animal);
}
console.log(animal);
// funcion crear aleatorio
function crearAleatorio(max) {
    return Math.floor(Math.random() * max);
}
// funcion cargar arreglo cliente
function cargarCliente(elemento, arr, listaMascota) {
    var datos = elemento.split(',');
    var nombre = datos[1];
    var telefono = Number(datos[2]);
    var visitas = Number(datos[3]);
    var arrayMascota = animal;
    var nuevoCliente = new Cliente(nombre, telefono, visitas, listaMascota);
    arr.push(nuevoCliente);
    return arr;
}
var datosClientes = new GestorDeArchivos("cliente.txt");
console.log(datosClientes);
var arrayMascota = animal;
var listaPersonas = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas, animal);
}
var crearId = function (letra, lista) {
    var id = letra;
    for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 10);
        id += random;
    }
    ;
    for (var i = 0; i < lista.length; i++) {
        if (id === lista[i].getId()) {
            crearId(lista, letra);
        }
    }
    ;
    return id;
};
crearId("c", listaPersonas);
