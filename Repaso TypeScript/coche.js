"use strict";
exports.__esModule = true;
exports.Coche = void 0;
var Coche = /** @class */ (function () {
    function Coche() {
        this._color = "gris";
        this._modelo = "_";
        this._velocidad = 0;
    }
    Coche.prototype.getColor = function () {
        return this._color;
    };
    Coche.prototype.getModelo = function () {
        return this._modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this._velocidad;
    };
    Coche.prototype.setColor = function (color) {
        this._color = color;
    };
    Coche.prototype.setModelo = function (modelo) {
        this._modelo = modelo;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this._velocidad = velocidad;
    };
    Coche.prototype.toString = function () {
        return "Coche " + this.getModelo() + "(" + this.getColor + ")";
    };
    Coche.prototype.acelerar = function () {
        this._velocidad++;
    };
    Coche.prototype.frenar = function () {
        if (this._velocidad > 0)
            this._velocidad--;
    };
    return Coche;
}());
exports.Coche = Coche;
