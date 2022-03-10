"use strict";
/**
 * Funciones anonimas
 */

var peli = function (nombre) {
  return "peli " + nombre;
};

var suma = function (n1, n2, sumaYmuestra, sumaPorDos) {
  var sumar = n1 + n2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);
  return sumar;
};

suma(
  4,
  5,
  function (dato) {
    console.log("La suma es", dato);
  },
  dato => {
    console.log("Suma por dos", dato * 2);
  }
);
/**
 * funciones de flecha
 * *  Sustituye function por =>
 */

