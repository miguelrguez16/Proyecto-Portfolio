"use strict";

/**
 * 1. Pida 6 numero por pantalla y los meta en un array
 * 2. Mostar el array entero en el cuerpo de la pag y consola
 * 3. Mostrar el array ordenado
 * 4. Invertir su orden y mostrarlo
 * 5. Mostar cuantos elementos tiene
 * 6. Busqueda de un valor introducido por el usuario
 *  Si está que nos diga el indice
 */

var numImput = 0;
var vector = new Array(6);

function documenta(titulo, vector) {
  document.write(`<h2>${titulo}</h2>`);
  document.write("<lu>");
  vector.forEach((element, index) => {
    document.write("<li>[" + index + "]:" + element + "</li>");
  });
  document.write("</lu>");
}

while (vector.length < 6) {
  numImput = parseFloat(prompt("Introduce valor numérico: "));
  if (!isNaN(numImput)) {
    vector.push(numImput);
  }
}
// ? 1.Mostar vector, documento y consola
var titu = "vector intro";
documenta(titu, vector);
console.log("Vector obtenido ", vector.join());
// ? VECTOR ORDENADO
documenta(
  "Vector ordenado",
  vector.sort((a, b) => a - b)
);
// ? VECTOR AL REVES
documenta("Vector al reves", vector.reverse());
console.log();
// ? Número de elementos
document.write(`<h2>Longitud ${vector.length}</h2>`);

// ? Encontrar posicion numero
var posicionNumeroBusqueda = vector.indexOf(
  parseFloat(prompt("Número a buscar: "))
);
if (posicionNumeroBusqueda == -1) {
  document.write("<p>Número:  no encontrado</p>");
} else {
  document.write(
    `<p>Número encontrado, posicion ${posicionNumeroBusqueda}</p>`
  );
}
