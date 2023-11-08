"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
var Clientes = /** @class */ (function () {
    function Clientes(name, tel) {
        this.id = (Math.random() + Date.now()).toString();
        this.visitas = 0;
        this.esvip = false;
        this.mascotasdeCliente = [];
        this.name = name;
        this.tel = tel;
        this.mascotasdeCliente = [];
    }
    Clientes.prototype.getNombre = function () {
        return this.name;
    };
    Clientes.prototype.getTel = function () {
        return this.tel;
    };
    Clientes.prototype.getId = function () {
        return this.id;
    };
    Clientes.prototype.getVisitas = function () {
        return this.visitas;
    };
    Clientes.prototype.sumarVisitas = function () {
        this.visitas++;
        if (this.visitas >= 5) {
            this.esvip = true;
        }
    };
    Clientes.prototype.setName = function (name) {
        this.name = name;
    };
    Clientes.prototype.setTel = function (tel) {
        this.tel = tel;
    };
    Clientes.prototype.EsVip = function () {
        return this.esvip;
    };
    Clientes.prototype.VincularMascota = function (mascota) {
        if (mascota.getId() === this.id) {
            this.mascotasdeCliente.push(mascota);
            console.log("mascota vinculada");
        }
        else {
            console.log("el id no es igual al del dueño que quiere agregar.");
        }
    };
    Clientes.prototype.verMascotas = function () {
        var nombresMascotas = '';
        for (var _i = 0, _a = this.mascotasdeCliente; _i < _a.length; _i++) {
            var mas = _a[_i];
            nombresMascotas += mas.getNombre() + ', ';
        }
        // Elimina la coma adicional al final y devuelve la cadena
        return nombresMascotas.slice(0, -2);
    };
    return Clientes;
}());
exports.Clientes = Clientes;
