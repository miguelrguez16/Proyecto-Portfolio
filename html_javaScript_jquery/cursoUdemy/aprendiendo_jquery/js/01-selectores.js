"use strict";
$(document).ready(() => {
  console.log("cargado");

  // ? SELECTOR DE ID
  $("#rojo").css("background", "red").css("color", "white");
  $("#amarillo").css("background", "yellow").css("color", "green");
  $("#verde").css("background", "green").css("color", "blue");

  // ? selectores de clase;
  // elementos cuya clase sea zebra
  var zebra = $(".zebra").css("padding", "5x");
  // console.log(zebra);
  // console.log(zebra[0]);
  // console.log(zebra.eq(1));

  /**
  $(".sin_borde").click(function () {
    console.log("click dado");
    $(this).addClass("zebra");
  });
*/
  /**
   *  las funciones de tipo flecha, no son iguales a las normales,
   *  las de tipo flecha no crean una region nueva entre sus llaves,
   *  heredan las de padre, mientras que las funciones normales si
   *  crear una region nueva entre sus llaves
   */
  $(".sin_borde").click((click) => {
    console.log("Click dado!!");
    console.log(click.currentTarget);
    $(click.currentTarget).addClass("zebra");
  });

  // ? SELECTOR DE ETIQUETA
  var parrafos = $("p").css("cursor", "pointer");
  // console.log(parrafos);
  parrafos.click(function () {
    var that = $(this);
    // console.log("parrafo: ");
    // console.log(that);
    if (!that.hasClass("grande")) {
      that.addClass("grande");
    } else {
      that.removeClass("grande");
    }
  });

  // ? SELECTOR DE ATRIBUTO

  $('[title="Google"]').css("background", "#ccc");
  $('[title="twitter"]').css("background", "aquamarine");


  // ? Otros selectores
  $("p,a").addClass("margen-superior");

  //var search = $("#caja").find(".resaltado");
  //var search = $("#caja .resaltado").eq(0).parent().parent().find('[title="Google"]');
  var search = $("#element2").parent().parent().find('.resaltado');
  console.log("search");
  console.log(search);

});
// $ CAMBIADO POR JQUERY
