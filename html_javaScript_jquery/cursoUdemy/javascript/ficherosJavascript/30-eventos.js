"use strict";

/**
 * EVENTOS
 */
// EL EVENTO LOAD SALTA EN ESTE CASO EN EL DOCUMENTO 
// EN EL CASO DE QUE TODOS LOS ELEMENTOS DEl DOM 
// SE HAN CARGADO
window.addEventListener("load", () => {
  var btn = document.querySelector("#btn");

  btn.addEventListener("click", function () {
    cambiarColor();
  });

  function cambiarColor() {
    var tmp = btn.style.background;
    if (tmp == "red") btn.style.background = "green";
    else btn.style.background = "red";

    btn.style.padding = "10px";
    btn.style.border = "1px solid #ccc";
  }

  // MOuse over
  btn.addEventListener("mouseover", function () {
    btn.style.background = "#ccc";
  });
  // MOUSE OUT
  btn.addEventListener("mouseout", function () {
    btn.style.background = "grey";
  });
  // Introduccion de datos
  var input = document.querySelector("#campo_nombre");
  // FOCUS
  input.addEventListener("focus", function () {
    console.log("HACIENDO FOCO");
  });
  // BLUR --> Para cuando se sale del foco
  input.addEventListener("blur", function () {
    console.log("SALIENDO FOCO");
  });
  // KEY DOWN
  input.addEventListener("keydown", function (event) {
    console.log("pulsando tecla [" + String.fromCharCode(event.keyCode) + "]");
  });
  // KEY PRESS
  input.addEventListener("keypress", function (event) {
    console.log(
      "tecla presionada [" + String.fromCharCode(event.keyCode) + "]"
    );
  });
  // KEY UP
  input.addEventListener("keyup", function (event) {
    console.log("tecla soltada [" + String.fromCharCode(event.keyCode) + "]");
  });
});
