"use strict";

// JSON - JavaScript Object Notation

var pelicula = {
  titulo: "Batman vs Superman",
  year: 2017,
  pais: "USA",
};

console.log(pelicula);

var films = [
  {
    titulo: "Batman vs Superman",
    year: 2017,
    pais: "USA",
  },
  {
    titulo: "Cinema Paradiso",
    year: 1989,
    pais: "Italia",
  },
];

window.addEventListener("load", () => {
  var caja = document.querySelector("#caja_peliculas");

  films.forEach((element, index) => {
    var p = document.createElement("p");
    p.append(element.titulo + ": " + element.year);
    caja.append(p);
  });
});



