"use strict";
exports.__esModule = true;
var Proveedores = /** @class */ (function () {
    function Proveedores(nombre, telefono) {
        this.id = (Math.random() + Date.now()).toString();
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Proveedores.prototype.getId = function () {
        return this.id;
    };
    Proveedores.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    ;
    Proveedores.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    ;
    Proveedores.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Proveedores.prototype.getTelefono = function () {
        return this.telefono;
    };
    ;
    return Proveedores;
}());
exports.Proveedores = Proveedores;
