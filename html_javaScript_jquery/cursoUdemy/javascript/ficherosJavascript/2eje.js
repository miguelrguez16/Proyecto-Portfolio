"use strict";

/**
 * Utilizando un bucle mostrar suma y media
 * de los numeros introducidos hasta introducir
 * un numero negarivo y ahi mostrar el resultado
 */

var sum = 0;
var cont = 0;

do {
    //O=JO CUIDAO CON EL PUTO PARSEINT si no se mete la linea esa
  var num = parseInt(prompt("introduce numero hasta negativo", -1));
    console.log("Numero Introducid: " + num);
  if (isNaN(num)) {
    num = 0;
  } else if (num >= 0) {
    sum += num;
    cont++;

    console.log("suma: " + sum + " contador: " + cont);

  }
} while (num > 0);


var media = sum/cont;
alert("La media de todos los numeros es: " + media);
