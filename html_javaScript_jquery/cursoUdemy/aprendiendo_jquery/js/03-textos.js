"use strict";

$(document).ready(function () {
  //console.log("rulando man");
  reloadLinks();
  $("#add_button")
  .removeAttr("disabled") // asi nada mas cargar la web admito lo 
  .click(function () {
    console.log($("#add_link").val());

    // * quitar todo y sustituir
    // $("#menu").html('<li><a href="' + $("#add_link").val() + "></a></li>");
    // * insertar el ultimo
     $("#menu").append('<li><a href="' + $("#add_link").val() + '"></a></li>');
    // * insertar antes o despues con un after o before:
    reloadLinks();
    $("#add_link").val("");
  });
});

function reloadLinks() {
  $("a").each(function (index, element) {
    // console.log(index); console.log(element);

    // ! No sobre cargar los accesos al DOM
    var that = $(this);

    // * seleccionamos el atributo que queremos
    var enlace = that.attr("href");

    that.attr("target","_blank"); // ABRIR EN OTRA PESTAÑA
    // that.remove("atributo")

    that.text(enlace); // * insertamos el propio enlace como texto
  });
}
