"use strict";

$(document).ready(function () {
  console.log("Cargado 06-interface.js");

  // ! Moverlos
  $(".elemento").draggable();

  // ! resizable
  $(".elemento").resizable();

  // ! seleccionar elmentos
  // $(".lista_seleccionable").selectable();

  //! Ordenar elementos como yo quiera
  $(".lista_seleccionable").sortable({
    update: function (evento, ui) {
      console.log("ha cambiado la lista");
    },
  });

  $("#save").click(function () {
    $("li").each(function (index, element) {
      console.log(element.innerHTML);
      //console.log(index);
    });
  });

  // ! DROP + elemento de selecion dropable
  $("#area").droppable({
    drop: function () {
      console.log("has soltado algo dentro");
    },
  });
  // EL elemento movido sea  draggeable
  $("#elemento-movido").draggable();

  // ! EFECTOS
  $("#mostrar").click(function () {
    //$(".caja-efectos").toggle("explode");
    //$(".caja-efectos").toggle("fade"); o fade()
    // $(".caja-efectos").toggle("blind"); lo mismo que el slide parecido
    //$(".caja-efectos").toggle("drop");
    //$(".caja-efectos").toggle("slide");
    //$(".caja-efectos").toggle("fold");
    // $(".caja-efectos").toggle("puff");
    // $(".caja-efectos").toggle("scale");
    $(".caja-efectos").toggle("shake", "slow", 5000);
  });

  // ! TOOLTIP
  $(document).tooltip();

  // ! CUADROS DE DIALOG
  //$("#popup").dialog();
  $("#lanza").click(function (event) {
    $("#popup").dialog();
  });

  // ! CALENDARIO
  $("#calendario").datepicker({
    showAnim: "explode",
    showButtonPanel: true,
    yearRange: "2022:2022",
    dateFormat: "dd-mm-yy"
  });


  // ! TABS PESTAÑITAS
  $("#pestanas").tabs();
});
