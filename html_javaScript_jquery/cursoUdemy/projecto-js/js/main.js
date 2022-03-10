"use strict";
$(document).ready(function () {
  //console.log("cargado");

  // * ID del enlace al css
  if (window.location.href.indexOf("index.html") > -1) {
    // ! SLIDER
    $(".bxslider").bxSlider({
      mode: "fade",
      captions: true,
      slideWidth: 1200,
      pager: false,
    });
  }

  // ! LOS DIFERENTES POST
  if (window.location.href.indexOf("index.html") > -1) {
    var posts = [
      {
        title: "Titulo de miguel 1",
        date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
        content:
          "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
      },
      {
        title: "Titulo de miguel 2",
        date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
        content:
          "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
      },
      {
        title: "Titulo de miguel 3",
        date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
        content:
          "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
      },
      {
        title: "Titulo de miguel 4",
        date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
        content:
          "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
      },
    ];
  }
  //console.table(posts);
  if (window.location.href.indexOf("index.html") > -1) {
    posts.forEach((item, index) => {
      var post = `<article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="" class="button-more">Leer más...</a>
          </article>`;
      // console.log(post);
      $("#posts").append(post);
    });
  }
  var theme = $("#theme");
  $("#to-purple").click(function () {
    theme.attr("href", "css/purple.css");
    localStorage.setItem("colorTheme", "purple");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
    localStorage.setItem("colorTheme", "red");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
    localStorage.setItem("colorTheme", "blue");
  });
  $("#to-aehstetic").click(function () {
    theme.attr("href", "css/aesthetic.css");
    localStorage.setItem("colorTheme", "aesthetic");
  });

  // * Scroll para arriba
  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $("#login form").submit(function () {
    //se.preventDefault();
    localStorage.setItem("form-name", $("#form-name").val());
  });
  var form_name = localStorage.getItem("form-name");

  if (form_name != null && form_name != undefined) {
    $("#about p").html("Bienvenido, <strong>" + form_name + "<strong>");
    $("#login").hide();
    $("#about").append(
      '<button id="btnsalir" class="button-more" value="salir">Salir</a>'
    );
  }

  $("#btnsalir").click(function (e) {
    e.preventDefault();
    localStorage.removeItem("form-name");
    $("#about p").html(
      "Era tarde tonta y caliente De esa queman el sol la frente era  verano del 87 y yo me moria por verte"
    );
    $("#login").show();
    $("#btnsalir").remove();
    location.reload();
  });

  // ! ACORDEON PARA ABOUT ME
  if (window.location.href.indexOf("aboutme") > -1) {
    // ! estoy en esta pagina
    $("#acordeon").accordion();
  }

  if (window.location.href.indexOf("reloj") > -1) {
    // ! estoy en esta pagina
    setInterval(function () {
      var reloj = moment().format("hh:mm:ss a");
      $("#reloj").html(reloj);
    }, 1000);
  }

  if (window.location.href.indexOf("contact") > -1) {
    $("#date").datepicker({
      showAnim: "fold",
      yearRange: "1930:2015",
      dateFormat: "dd-mm-yy",
    });

    // ! validacion
    $.validate({
      
    });

    $("#contact").submit(function (e) { 
      e.preventDefault();
      alert("Datos enviados");
    });
  }
});
