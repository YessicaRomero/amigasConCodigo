"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var veterinaria_1 = require("./veterinaria");
var mascotas_1 = require("./mascotas");
var proveedores_1 = require("./proveedores");
var clientes_1 = require("./clientes");
var Gestora = /** @class */ (function () {
    function Gestora() {
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
                this.mostrarListaSucursales();
            }
            else {
                console.log("Error.Sucursal no eliminada.");
            }
        }
        else {
            console.log("Sucursal no encontrada.");
        }
    };
    return Gestora;
}());
var gestora = new Gestora();
//clientes
var cliente1 = new clientes_1.Clientes("luna", 344645);
var cliente02 = new clientes_1.Clientes("yessica", 2245789);
//mascotas
var Masc01 = new mascotas_1.Mascotas(mascotas_1.animalTypeEnum.gato, "lolo", cliente1);
var Mas02 = new mascotas_1.Mascotas(mascotas_1.animalTypeEnum.perro, "vera", cliente1);
//proveedores
var pr01 = new proveedores_1.Proveedores("guadalupe", "22548645");
var pr02 = new proveedores_1.Proveedores("ailen", "25469854");
// veterinarias
var veterinaria01 = new veterinaria_1.Veterinarias("hola", "adios");
var veterinaria02 = new veterinaria_1.Veterinarias("ailen", "massa");
veterinaria01.agregarClientes(cliente1);
veterinaria02.agregarClientes(cliente02);
veterinaria01.leerListaClientes();
veterinaria02.leerListaClientes();
veterinaria01.agregarPaciente(Masc01);
veterinaria02.agregarPaciente(Mas02);
veterinaria01.leerlistaPacientes();
veterinaria02.leerlistaPacientes();
veterinaria01.agregarProveedores(pr01);
veterinaria02.agregarProveedores(pr02);
veterinaria01.leerListaProveedores();
veterinaria02.leerListaProveedores();
cliente1.VincularMascota(Masc01);
cliente1.VincularMascota(Mas02);
veterinaria01.leerListaClientes();
gestora.agregarSucursal(veterinaria01);
gestora.agregarSucursal(veterinaria02);
//gestora.mostrarListaSucursales();
//cliente02.sumarVisitas()
//cliente02.sumarVisitas()
//cliente02.sumarVisitas()
//cliente02.sumarVisitas()
//veterinaria02.leerListaClientes()
gestora.mostrarListaSucursales();
//eliminar
//veterinaria01.leerListaClientes()
//veterinaria01.eliminarClientes()
//veterinaria01.leerListaProveedores()
//veterinaria01.eliminarProveedores()
//veterinaria01.leerlistaPacientes()
//veterinaria01.eliminarPacientes()
//gestora.mostrarListaSucursales()
//gestora.eliminarSucursal(veterinaria01)
