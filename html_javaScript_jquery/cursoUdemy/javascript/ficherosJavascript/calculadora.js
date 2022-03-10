"use strict";
/**
 * Calculadora
 *  si metemos un numero aml que noas los vuelva a peedir
 * En el cuierpo de la pagina en una aleta y por la consola el restula de suamr restar multiplicar y dividir esas dos cifras
 */

var Anumero = -1,
  BNumero = -1;
do {
  Anumero = parseInt(prompt("Introduce el primer número:", 0));
  BNumero = parseInt(prompt("Introduce el segundo número 2", 0));
} while (
  BNumero < 0 ||
  Anumero < 0 ||
  isNaN(Anumero) ||
  isNaN(BNumero) ||
  BNumero < Anumero
);

var resultado =
  " la sima es: " +
  (Anumero + BNumero) +
  "/n" +
  "la resta es: " +
  (Anumero - BNumero) +
  "/n" +
  "la multiplicacion es " +
  Anumero * BNumero +
  "/n" +
  " la division es " +
  Anumero / BNumero +
  "/n";

var resultadoDocumento = " la sima es: " +   (Anumero + BNumero) +    "</br>" +
                        "la resta es: " +  (Anumero - BNumero) + "</br>" +
                    "la multiplicacion es " + Anumero * BNumero + "</br>" +
                    " la division es " + Anumero / BNumero + "</br>";

document.write(resultadoDocumento);
