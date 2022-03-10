"use strict";

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", () => {
  var titulo = document.querySelector("#addPelicula").value;
  if (titulo.length > 0) localStorage.setItem(titulo, titulo);
});

var ul = document.querySelector("#peliculasLista");

for(var i in localStorage){     
    if(typeof localStorage[i] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formularioBorrado = document.querySelector("#formularioBorrar");
formularioBorrado.addEventListener("submit", () => {
  var titulo = document.querySelector("#removePelicula").value;
  if (titulo.length >= 1) localStorage.removeItem(titulo);
});
