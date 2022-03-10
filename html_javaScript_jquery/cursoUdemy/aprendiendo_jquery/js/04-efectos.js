"use strict";

$(document).ready(function () {
  console.log("CARGADO");
  var caja = $("#caja");

  caja.hide();

  var btnMostar = $("#mostrar");
  var btnOcultar = $("#ocultar");
  btnOcultar.hide();

  btnMostar.click(function () {
    btnMostar.hide();
    btnOcultar.show();
    //$("#caja").fadeIn("slow");
    //$("#caja").fadeTo("normal", 2);
    caja.slideDown("normal", () => {
      console.log("caja mostrada");
    });
  });

  btnOcultar.click(function () {
    btnMostar.show();
    btnOcultar.hide();
    // $("#caja").fadeOut("slow"); // TAmbien hay fast, slow y normal
    // $("#caja").fadeTo("normal", 0);
    caja.slideUp("fast", () => {
      console.log("caja ocultada");
    });
  });

  $("#todoEnUno").click(function () {
    //$("#caja").toggle("normal");+
    caja.fadeToggle();
  });

  $("#animame").click(function () {
    caja
      .animate(
        { marginLeft: "300px", fontSize: "40px", height: "150px" },
        "slow"
      )
      .animate({ borderRadius: "1000px", marginTop: "100px" }, "slow")
      .animate({ borderRadius: "0px", marginLeft: "0px" }, "slow")
      .animate({ fontSize: "19px", marginTop: "0px" }, "slow")
      .animate({ height: "50px" }, "slow");
  });

});
