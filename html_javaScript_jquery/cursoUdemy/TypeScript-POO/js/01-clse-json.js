"use strict";

var bicicleta = {
  color: "morado",
  modelo: "BH",
  frenos: "disco",
  velocidadMaximo: "70km/h",
  cambiarColor: function (nuevoColor) {
    this.color = nuevoColor;
    console.log(this);
  },
};
console.log(bicicleta);
bicicleta.cambiarColor("azul");
