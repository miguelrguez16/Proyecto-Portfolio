"use strict";
var numero = 73;
var texto = "HOLA HOLITA VECINITO";
var textoOtro = " OTRO TEXTO";

var quieresUnDAto = numero.toString();
console.log(typeof quieresUnDAto);
console.log(texto.toLowerCase());
console.log("".length);

// BUSCAR EN TEXTOS
var busqueda = texto.indexOf("O");
console.log(busqueda);

var busqueda1 = texto.search("LA"); // * aparece -1 si no existe
console.log(busqueda1);

var encontradoEN = texto.match("LA"); // * mucho mas potente
console.log(encontradoEN);

var encontradoEN = textoOtro.substring("OTRO"); // * esta en el texto
console.log(encontradoEN);

var encontradoEN = textoOtro.charAt(2); // * char en pos 2
console.log(encontradoEN);

var encontradoEN = textoOtro.startsWith(" "); // *  devuelve true o false si el texto comienza con esa ocurrencia
console.log(encontradoEN);

var encontradoEN = textoOtro.includes(" "); // *  devuelve true o false si el texto tiene esa ocurrencia
console.log(encontradoEN);

console.log(texto.replace("HOLA", "ola"));

// sLICE PARA RECORTAR ENTRE CIERTOS PUNTOS
console.log(texto.slice(3, 10));
// SPLIT dividir en un array utilizando un separador
console.log(texto.split(" "));

// ! FUNCION TRIM
//  Quita los espaciones del final y del principio
let textoGOrdo = "    Mira que meter espacios.     ";
console.log("[" + textoGOrdo + "]");
console.log(textoGOrdo.trim());

// ! PLANTILLAS DE TEXTO
var nombre = prompt("Tu Nombre");
var ape = prompt("Tus apellidos");

var welcome = `
<h1>Hola que tal</h1>
<p>Bienvenido ${nombre}, ${ape}</p>
`;

document.write(welcome);

