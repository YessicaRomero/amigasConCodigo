"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var Veterinarias = /** @class */ (function () {
    function Veterinarias(nombre, direccion) {
        this.id = (Math.random() + Date.now()).toString();
        this.nombre = nombre;
        this.direccion = direccion;
        this.proveedores = [];
        this.clientes = [];
        this.pacientes = [];
    }
    Veterinarias.prototype.getId = function () {
        return this.id;
    };
    Veterinarias.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinarias.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinarias.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Veterinarias.prototype.setDireccion = function (dir) {
        this.direccion = dir;
    };
    Veterinarias.prototype.leerListaClientes = function () {
        var resultados = this.clientes;
        if (resultados) {
            console.log("===LISTA DE CLIENTES de \"" + this.getNombre() + "\"==");
            if (!this.clientes.length) {
                console.log("no se encontro el cliente \n");
            }
            else {
                this.clientes.forEach(function (cl) {
                    console.log("\n        ------------------\n        ID: " + cl.getId() + "\n        Nombre: " + cl.getNombre() + "\n        Telefono: " + cl.getTel() + "\n        Visitas: " + cl.getVisitas() + "\n        Cliente Vip: " + cl.EsVip() + "\n        mascotas : " + cl.verMascotas() + "\n        ------------------\n               \n        ");
                });
            }
        }
        rls.keyInPause("\n");
    };
    ;
    Veterinarias.prototype.leerListaProveedores = function () {
        var resultados = this.proveedores;
        if (resultados) {
            console.log("===LISTA DE PROVEEDORES DE " + this.getNombre() + "==");
            if (!this.proveedores.length) {
                console.log("no se encontro el provedor \n");
            }
            else {
                this.proveedores.forEach(function (prov) {
                    console.log("\n        ------------------\n        ID: " + prov.getId() + "\n        Nombre: " + prov.getNombre() + "\n        Telefono: " + prov.getTelefono() + "\n       \n        ------------------\n               \n        ");
                });
            }
        }
        rls.keyInPause("\n");
    };
    ;
    Veterinarias.prototype.leerlistaPacientes = function () {
        var resultados = this.pacientes;
        if (resultados) {
            console.log("===LISTA DE PACIENTES " + this.getNombre() + "==");
            if (!this.pacientes.length) {
                console.log("no se encontro el paciente \n");
            }
            else {
                this.pacientes.forEach(function (pac) {
                    console.log("\n        ------------------\n        ID: " + pac.getId() + "\n        Nombre: " + pac.getNombre() + "\n        Especie: " + pac.getEspecie() + "\n       \n        ------------------\n               \n        ");
                });
            }
        }
        rls.keyInPause("\n");
    };
    ;
    Veterinarias.prototype.agregarPaciente = function (paciente) {
        this.pacientes.push(paciente);
        console.log("===paciente registrado en veterinaria " + this.getNombre() + "===");
    };
    ;
    Veterinarias.prototype.agregarClientes = function (cliente) {
        this.clientes.push(cliente);
        console.log("===cliente registrado en veterinaria " + this.getNombre() + "===");
        cliente.sumarVisitas();
    };
    ;
    Veterinarias.prototype.agregarProveedores = function (proveedor) {
        this.proveedores.push(proveedor);
        console.log("===proveedor registrado en veterinaria " + this.getNombre() + "===");
    };
    ;
    Veterinarias.prototype.eliminarClientes = function () {
        console.log("===BORRAR CLIENTE DE LA LISTA " + this.getNombre() + "=== \n");
        var IdClienteABorrar = rls.question("ingrese el id del cliente a borrar:");
        var ClienteIndex = this.clientes.findIndex(function (cli) { return cli.getId() === IdClienteABorrar; });
        if (ClienteIndex !== -1) {
            this.clientes.splice(ClienteIndex, 1);
            console.log("cliente eliminado");
            this.leerListaClientes();
        }
        else {
            console.log("Cliente no eliminado. \n");
        }
        rls.keyInPause();
    };
    Veterinarias.prototype.eliminarPacientes = function () {
        console.log("===BORRAR PACIENTE DE LA LISTA " + this.getNombre() + "=== \n");
        var IdPacABorrar = rls.question("ingrese el id del paciente a borrar:");
        var PacIndex = this.pacientes.findIndex(function (pac) { return pac.getId() === IdPacABorrar; });
        if (PacIndex !== -1) {
            this.pacientes.splice(PacIndex, 1);
            console.log("Paciente eliminado");
            this.leerlistaPacientes();
        }
        else {
            console.log("Paciente no eliminado. \n");
        }
        rls.keyInPause();
    };
    ;
    Veterinarias.prototype.eliminarProveedores = function () {
        console.log("===BORRAR PROOVEDOR DE LA LISTA " + this.getNombre() + "=== \n");
        var IdProvABorrar = rls.question("ingrese el id del proveedor a borrar:");
        var ProvIndex = this.proveedores.findIndex(function (prov) { return prov.getId() === IdProvABorrar; });
        if (ProvIndex !== -1) {
            this.proveedores.splice(ProvIndex, 1);
            console.log("proveedor eliminado");
            this.leerListaProveedores();
        }
        else {
            console.log("proveedor no eliminado. \n");
        }
        rls.keyInPause();
    };
    ;
    return Veterinarias;
}());
exports.Veterinarias = Veterinarias;
