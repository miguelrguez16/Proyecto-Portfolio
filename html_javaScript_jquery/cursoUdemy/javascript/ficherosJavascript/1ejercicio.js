"use strict";

/**
 * Programa que reciba dos numeros y que nos diga
 * cual es el mayor y cual el menor y si son iguales
 */
var Anumero = -1, BNumero = -1;
do {
 Anumero = parseInt(prompt("Numero 1", 0));
 BNumero = parseInt(prompt("Numero 2", 0));
}while(BNumero<=0 || Anumero<=0 || isNaN(Anumero) || isNaN(BNumero));



if (Anumero == BNumero) {
  alert("los dos numeros son iguales", Anumero);
} else if (Anumero > BNumero) {
    var s = 
    alert("El numero: " + Anumero + " es mayor que: " + BNumero);

} else {
    alert("El numero: " + BNumero + " es mayor que: " + Anumero);
}
