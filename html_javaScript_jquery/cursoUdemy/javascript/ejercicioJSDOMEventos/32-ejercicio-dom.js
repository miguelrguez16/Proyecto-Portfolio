"use strict";

window.addEventListener("load", () => {
  console.log("Cargado DOM");

  var formulario = document.querySelector("#formulario");
  // vamos a esconder el div
  var dashed = document.querySelector(".dashed");
  dashed.style.display = "none";

  formulario.addEventListener("submit", () => {
    console.log("Evento submit cargado");

    // hay que acceder a cada elemento del DOM
    var nombre = document.querySelector("#nombre").value.trim();
    var apellidos = document.querySelector("#apellidos").value.trim();
    var edad = parseInt(document.querySelector("#edad").value);

    if (nombre == null || nombre.length == 0) {
      alert("Nombre no es valido");
      var marcarError = document.querySelector("#error_nombre");
      marcarError.innerHTML="Error formato nombre";
      return false;
    }else{
        document.querySelector("#error_nombre").style.display = "none";
    }
    if (apellidos == null || apellidos.length == 0) {
      alert("Apellidos no es valido");
      return false;
    }
    if (edad == null || isNaN(edad) || edad < 0) {
      alert("Edad no es valido");
      return false;
    }

    dashed.style.display = "block";
    var p_nombre, p_apellidos, p_edad;
    p_nombre = document.querySelector("#p_nombre span");
    p_apellidos = document.querySelector("#p_apellidos span");
    p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    /*
    var datos_user = [nombre, apellidos, edad];
    for (var indice in datos_user) {
        var parrafo = document.createElement("p");
        parrafo.append(datos_user[indice]);
        dashed.append(parrafo);
    }*/
  });
});
