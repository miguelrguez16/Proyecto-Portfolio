"use strict";

var vtr = new Array(1, 2, 3, 4, 5, 65, 2);

document.write("</br><ul>");
vtr.forEach((elemento, indice) => {
  document.write("<li>[" + indice + "]:" + elemento + "</li>");
});
document.write("</ul>");

var categorias = ["Accion", "Comedia", "Terror", "Alfajores"];
var peli = ["le vie est bell", "Kingsman", "AVatar", "El señor de los anillos"];
var matriz = [categorias, peli];
console.log(matriz);
matriz.push("batman"); // * metes en el array
console.log(matriz);
var ele = matriz.pop(); // * sacas y elimninas el ultimo

console.log(ele);

console.log(matriz);
console.log(vtr);

vtr.splice(2, 1); // te elina el que tu quieres
console.log(vtr);
// * CONVERTIR EL ARRAY En un string
console.log(vtr.join());

// * ORDENAR VECTOR
console.log("DEL REVES")
vtr.sort((a,b)=> b-a);
console.log(vtr.join()); 

// *  DARLE LA VUELTA
vtr = vtr.reverse();
console.log(vtr.join());

// * FOR IN
console.log("FOR IN");
for(let palabra in categorias){
    console.log(`
        "Palabra[${palabra}] = ${categorias}"
        `);
}


// * BUSQUEDAS EN ARRAY
var busquedaPalabra = categorias.findIndex(categoria => categoria==="Comedia");
console.log(busquedaPalabra);

// * EXISTEN VALORES QUE CUMPLEN ALGUNA CONDICION
// * Busqueda comprobacion si hay valores
var busquedaNumero = vtr.some(numBuscar => numBuscar>3);
console.log(busquedaNumero);