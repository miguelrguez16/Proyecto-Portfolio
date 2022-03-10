"use strict";
/**
 * Hacer un programa que muestre todos 
 *  los numeros entre dos numero introducidos por el usuario
 */


 var Anumero = -1, BNumero = -1;
 do {
  Anumero = parseInt(prompt("Introduce el primer número:", 0));
  BNumero = parseInt(prompt("Introduce el segundo número 2", 0));
}while(BNumero<=0 || Anumero<=0 || isNaN(Anumero) || isNaN(BNumero) || BNumero < Anumero);
document.write("<h1>De "+Anumero+ " a " + BNumero+" están los números:</h1>")
for(let i = Anumero; i < BNumero; i++){
    document.write(" " + i);
}