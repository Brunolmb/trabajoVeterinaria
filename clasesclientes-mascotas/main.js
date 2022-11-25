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
    Mascotas.prototype.asignarEspecie = function () {
        if (this.especie === "perro" || this.especie === "gato") {
            console.log(this.especie);
        }
        else {
            console.log("exótica");
        }
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
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascota;
    };
    Cliente.prototype.setVisitas = function () {
        if (this.visitas >= 0 && this.visitas <= 5) {
            console.log("Gracias por venir a Mascote.ar");
        }
        else {
            console.log("Gracias por volver a Mascote.ar. Felicitaciones usted es cliente vip");
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
for (var i = 0; i < datosMascota.getArregloString.length; i++) {
    cargarArreglo(datosMascota.getArregloString()[i], animal);
}
console.log(animal);
// funcion cargar arreglo cliente
function cargarCliente(elemento, arr, animal) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var telefono = Number(datos[1]);
    var visitas = Number(datos[2]);
    var nuevoCliente = new Cliente(nombre, telefono, visitas, animal);
    arr.push(nuevoCliente);
    nuevoCliente.setVisitas();
    return arr;
}
var crearId = function (letra, lista) {
    var id = " ";
    for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * 10);
        id += random;
    }
    for (var i = 0; i < lista.length; i++) {
        if (id === lista[i].getId()) {
            crearId(lista, letra);
        }
    }
    ;
    return id;
};
var datosClientes = new GestorDeArchivos("cliente.txt");
console.log(datosClientes);
var listaPersonas = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas, animal);
    crearId("c", listaPersonas);
}
console.log(listaPersonas);
