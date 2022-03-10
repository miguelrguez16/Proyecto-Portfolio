"use strict";

function cambiaColor(color) {
  caja.style.background = color;
}
// ! DOM Document Object Model
// ! Selecciones por id
var caja = document.getElementById("micaja");
var subCaja = document.getElementById("micaja").innerHTML;

// ! QUERY SELECTOR
var cajita = document.querySelector("#micaja");
// ? Tambien funciona

console.log(caja);
console.log(subCaja);

document.getElementById("micaja").innerHTML = "CAJA NUEVA";
caja.style.background = "grey";
caja.style.padding = "20px";
caja.style.color = "black";
caja.className = "HOLA";

// ! Seleccionamos elementos por etiqueta
var todosLosDiv = document.getElementsByTagName("div");
console.log(todosLosDiv);
todosLosDiv[2].innerHTML = "Segundo DIV modificado";
todosLosDiv[2].style.background = "green";

//todosLosDiv.forEach((elemento,indice) => { // No vale para un HTML colletcion
for (var valor in todosLosDiv) {
  if (typeof todosLosDiv[valor].textContent == "string") {
    //  Pasa que identifica más cosas dentro de los div
    var nuevoParrafo = document.createElement("p");
    // Dentro del parrafo meteremos el texto del div
    var nuevoTextoParrafo = document.createTextNode(
      todosLosDiv[valor].textContent
    );
    // metemos en el parrafo el nuevo texto
    nuevoParrafo.appendChild(nuevoTextoParrafo);
    document.querySelector("#miSeccion").appendChild(nuevoParrafo);
  }
}
var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");
seccion.appendChild(hr);
seccion.prepend(hr);
/**
 * se peude meter despues con un prepend
 */
// ! SEleccionamos elementos por clase
var divsRojo = document.getElementsByClassName("rojo");
console.log("Ancho divsRojo:" + divsRojo.length);

//console.log("Inicio bucle");
//console.time("bucle");
for (var i = 0; i<divsRojo.length; i++ ) {
    divsRojo[i].style.background = "red";
    divsRojo[i].style.color = "white";
}
//console.timeEnd("bucle");

var divsAmarillo = document.getElementsByClassName("amarillo");
console.log("Ancho divsAmarillo: " + divsAmarillo.length);


// ! QUERY SELECTOR
var id = document.querySelector("#curso");
console.log("Id=Curso " + id);
console.log(id);

var claseRojo = document.querySelectorAll("div.rojo");
console.log("div.rojo " + claseRojo);
console.log(claseRojo);
