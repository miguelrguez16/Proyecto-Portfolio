"use strict";

$(document).ready(function () {
  //console.log("cargado ajax");

  var datos = $("#datos");
  // ! Metodo LOAD
  // datos.load("https://reqres.in/api/users?page=2");
  // ! Metodo GET
  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    if (response.data.length == 0) {
      datos.html("No hay datos");
    } else {
      response.data.forEach((elemento, indice) => {
        datos.append("<p>" + elemento.first_name + "</p>");
      });
    }
  });

  // ! Metodo POST

  var usuario = {
    name: "Miguel Rguez",
    job: "future leader",
  };

  /**$.post("https://reqres.in/api/users", usuario, function (response) {
    console.log(response);
  });
*/
  $("#formulario").submit(function (e) {
    e.preventDefault(); // Asi quitamos de que nos redirija a otra pagina

    var newUser = {
      name: $('input[name="nombre"]').val(),
      job: $('input[name="job"]').val(),
    };

    var urlFormulario = $(this).attr("action");

    console.log(newUser.name, newUser.job, urlFormulario);
    /**
     * $.post("https://reqres.in/api/users", user, function (response) { //$(this).attr("action") no nos sirve ya que no utilizamos un submit
            console.log(response);
        }).done(function () {
            alert("Usuario añadidio!!");
        });
     */

    $.ajax({
      method: "POST",
      url: urlFormulario,
      data: JSON.stringify(newUser),
      contentType: "application/json",
      beforeSend: function () {
        console.log("Enviando datos ...");
      },
      success: function (response) {
        console.log(response);
      },
      error: function () {
        alert("error");
      },
      timeout: 10000, // tiempo maximo de respuesta
    });
  });
});
