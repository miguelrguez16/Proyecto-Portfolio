'use strict'
console.log("tipos de datos ");

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
console.log("suma: " + operacion);

// tipos de datos
var entero = 9;
var texto = "ho'l'i";
console.log("texto: " + texto);
var booleano = true; // false;


//funciones conversion tipos de datos

// De string a 
var numero_falso ="33";
console.log("numero_falso: ", 7 + numero_falso);//output: numero_falso:  733
console.log("numero_falso: ", 7 + Number(numero_falso));//output: numero_falso:  40
console.log("numero_falso: ", 7 + parseInt(numero_falso));//output: numero_falso:  40
console.log("numero_falso: ", 7 + parseFloat(numero_falso));//output: numero_falso:  40

console.log(String(4) + "73"); //output 473

// QUE TIPO DE DATOS ES
console.log(typeof 4.4 ); // --> Output: number
console.log(typeof texto ); // --> Output: string
console.log(typeof booleano ); // --> Output: boolean

