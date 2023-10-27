"use strict";
exports.__esModule = true;
var animalTypeEnum;
(function (animalTypeEnum) {
    animalTypeEnum["perro"] = "perro";
    animalTypeEnum["gato"] = "gato";
    animalTypeEnum["otroAnimal"] = "exotico";
})(animalTypeEnum = exports.animalTypeEnum || (exports.animalTypeEnum = {}));
var Mascotas = /** @class */ (function () {
    function Mascotas(especie, nombre, dueño) {
        this.especie = especie;
        this.nombre = nombre;
        this.idDueño = dueño.getId();
    }
    Mascotas.prototype.getEspecie = function () {
        return this.especie;
    };
    Mascotas.prototype.getNombre = function () {
        return this.nombre;
    };
    Mascotas.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Mascotas.prototype.getId = function () {
        return this.idDueño;
    };
    return Mascotas;
}());
exports.Mascotas = Mascotas;
