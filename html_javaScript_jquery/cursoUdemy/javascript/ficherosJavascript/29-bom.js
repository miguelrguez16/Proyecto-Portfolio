"use strict";
/**
 * ! BROWSER OBJECT MODEL
 * Poder ver tamaño de la ventana
 * Redirigir dentro de una pagina
 */

// Tamaño de la ventana del navegador
function getWindowSize() {
  console.log(
    "tamaño de la ventana: [" +
      window.innerHeight +
      "-" +
      window.innerWidth +
      "] ->" + window.location
  );
}
function getScreenSize() { 
  console.log(
    "tamaño de la vista: [" + screen.height + "-" + screen.width + "] ->" + window.location
  );
}
function nuevaVentana(nuevaPestania){
    window.open(nuevaPestania,"hola","width=400,height=400")
}
console.log(window.location);

function redireccion(url){
    window.location.href = url;
}
