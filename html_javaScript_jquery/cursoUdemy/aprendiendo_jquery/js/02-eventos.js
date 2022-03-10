"use strict";

$(document).ready(function () {
  console.log("rulando man");

  // ! mouse over y mouse out

  $("#caja1").mouseover(function () {
    $(this).css("background-color", "rgb(80, 202, 202)");
  });

  $("#caja1").mouseout(function () {
    $(this).css("background-color", "blanchedalmond");
  });

  // ! HOVER --> Vale para los mismo eventos pero es mas potente
  function cambiaPrimero() {
    $(this).css("background-color", "rgb(80, 202, 202)");
  }

  function cambiaSegundo() {
    $(this).css("background-color", "blanchedalmond");
  }

  $("#caja2").hover(cambiaPrimero, cambiaSegundo);

  // ! Mouse click

  $("#caja2").click(function () {
    $(this).css("background", "blue").css("color", "white");
  });

  // ! Mouse DOBLE click

  $("#caja2").dblclick(function () {
    $(this).css("font", "helvetica").css("color", "red");
  });

  var nombre = $("#nombre");
  var divDatos = $("#datos");
  // ! focus de un elemento --> dentro de un html
  nombre.focus(function () {
    $(this).css("border", "1px solid transparent");
  });

  // ! blur de un elemento --> saliendo del un html
  nombre.blur(function () {
    $(this).css("border", "1px solid green");

    divDatos.text($(this).val()).show();
  });

  // ! Mousedown cuando clickas con el raton
  divDatos.mousedown(function () {
    $(this).css("border-color", "gray");
  });

  // ! mouseup para cuando despues de clickar levantas
  divDatos.mouseup(function () {
    $(this).css("border-color", "red");
  });

  // ! Mouse move --> persigue al raton -->captura el mov del raton
  $(document).mousemove(function (event) {
    $("body").css("cursor","none");
    console.log("X:" + event.clientX + " - Y:" + event.clientY);
    $("#sigueme").css("left", event.clientX).css("top", event.clientY);
  });
});
