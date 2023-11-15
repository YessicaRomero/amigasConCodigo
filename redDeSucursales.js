"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var veterinaria_1 = require("./veterinaria");
var mascotas_1 = require("./mascotas");
var proveedores_1 = require("./proveedores");
var clientes_1 = require("./clientes");
var Gestora = /** @class */ (function () {
    function Gestora() {
        this.menuOpcion = ["lista Sucursales", "Eliminar Sucursal"];
        this.sucursales = [];
    }
    Gestora.prototype.mostrarListaSucursales = function () {
        console.log("El contenido de la lista es: ");
        this.sucursales.forEach(function (sucursal) {
            var sucursalString = JSON.stringify(sucursal, null, 2);
            console.log(sucursalString);
        });
        rls.keyInPause();
    };
    ;
    Gestora.prototype.agregarSucursal = function (sucursal) {
        this.sucursales.push(sucursal);
        rls.keyInPause();
    };
    ;
    Gestora.prototype.eliminarSucursal = function () {
        console.log("---Eliminar Sucursal---");
        var vetBorrar = rls.question("Ingrese el id de la veterinaria que desea eliminar: ");
        var vetIndex = this.sucursales.findIndex(function (vet) { return vet.getId() === vetBorrar; });
        if (vetIndex !== -1) {
            var vetBorrar_1 = this.sucursales[vetIndex];
            var confirmado = rls.keyInYN("desea eliminar la sucursal " + vetBorrar_1.getNombre() + "? (Y/N)");
            if (confirmado) {
                this.sucursales.splice(vetIndex, 1);
                console.log("Sucursal eliminada.");
            }
            else {
                console.log("Error.Sucursal no eliminada.");
            }
        }
        else {
            console.log("Sucursal no encontrada.");
        }
    };
    Gestora.prototype.menu = function () {
        while (true) {
            console.clear();
            console.log("Menu de Sucursales");
            var choice = rls.keyInSelect(this.menuOpcion);
            switch (choice) {
                case 0:
                    this.mostrarListaSucursales();
                    break;
                case 1:
                    this.eliminarSucursal();
                    break;
                default:
                    console.log("GRACIAAAS :)");
                    return;
            }
        }
    };
    return Gestora;
}());
var gestora = new Gestora();
//instanciamos clientes
var cliente1 = new clientes_1.Clientes("Luna", 344645);
var cliente02 = new clientes_1.Clientes("Yessica", 2245789);
var cliente03 = new clientes_1.Clientes("Ailen", 290876438);
var cliente04 = new clientes_1.Clientes("Lucas", 2908438);
//instanciamos mascotas
var Masc01 = new mascotas_1.Mascotas(mascotas_1.animalTypeEnum.gato, "Lolo", cliente1);
var Mas02 = new mascotas_1.Mascotas(mascotas_1.animalTypeEnum.perro, "Vera", cliente03);
var Mas03 = new mascotas_1.Mascotas(mascotas_1.animalTypeEnum.otroAnimal, "Mora", cliente02);
var Mas04 = new mascotas_1.Mascotas(mascotas_1.animalTypeEnum.gato, "Bigotes", cliente03);
//instanciamos proveedores
var pr01 = new proveedores_1.Proveedores("Guadalupe", "22548645");
var pr02 = new proveedores_1.Proveedores("Ailen", "25469854");
//instanciamos veterinarias
var veterinaria01 = new veterinaria_1.Veterinarias("Animaladas", "Ugarte 675");
var veterinaria02 = new veterinaria_1.Veterinarias("PetShop", "Pedro N. Carrera 671");
// agregamos clientes
veterinaria01.agregarClientes(cliente1);
veterinaria01.agregarClientes(cliente02);
veterinaria02.agregarClientes(cliente03);
veterinaria02.agregarClientes(cliente04);
// agregamos pacientes
veterinaria01.agregarPaciente(Masc01);
veterinaria01.agregarPaciente(Mas03);
veterinaria02.agregarPaciente(Mas02);
veterinaria02.agregarPaciente(Mas04);
// agregamos proveedores
veterinaria01.agregarProveedores(pr01);
veterinaria02.agregarProveedores(pr02);
// vinculamos clientes y mascotas
cliente03.VincularMascota(Mas04);
cliente03.VincularMascota(Mas02);
cliente1.VincularMascota(Masc01);
cliente02.VincularMascota(Mas03);
// verificacion de IDs
cliente02.VincularMascota(Mas02);
veterinaria01.menu();
veterinaria02.menu();
// cambiamos un cliente a VIP0
cliente02.sumarVisitas();
cliente02.sumarVisitas();
cliente02.sumarVisitas();
cliente02.sumarVisitas();
veterinaria01.leerListaClientes();
// Agregamos sucursales a la red
gestora.agregarSucursal(veterinaria01);
gestora.agregarSucursal(veterinaria02);
gestora.menu();
//modificar datos
cliente1.setName("sol");
veterinaria01.leerListaClientes();
