var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ! DECORDADOR
// Añade una funcionalidad a una clase
function estampar(logo) {
    return function (target) {
        target.prototype.setEstampado = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this._color = color;
        this._modelo = modelo;
        this._marca = marca;
        this._precio = precio;
        this._talla = talla;
    }
    Camiseta.prototype.getColor = function () {
        return this._color;
        throw new Error("Method not implemented.");
    };
    Camiseta.prototype.setColor = function (newColor) {
        this._color = newColor;
    };
    Camiseta.prototype.setModelo = function (newModelo) {
        this._modelo = newModelo;
    };
    Camiseta.prototype.setMarca = function (newMarca) {
        this._marca = newMarca;
    };
    Camiseta.prototype.setTalla = function (newTalla) {
        this._talla = newTalla;
    };
    Camiseta.prototype.toString = function () {
        return "Camiseta de color" + this._color;
    };
    Camiseta = __decorate([
        estampar("LOS CHIKOS DEL MAIZ")
    ], Camiseta);
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(color, modelo, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this._capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this._capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this._capucha;
    };
    return Sudadera;
}(Camiseta));
var cami = new Camiseta("Rojo", "Nije", "Jike", "M", 34);
console.log(cami);
cami.setEstampado();
