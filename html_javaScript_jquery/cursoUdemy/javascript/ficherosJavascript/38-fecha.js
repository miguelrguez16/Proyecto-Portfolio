"use strict";

var fecha = new Date();

var textoHora = `Consulta a ${fecha.getFullYear()}
 El mes es ${fecha.getMonth() + 1} 
 El día es ${fecha.getDate()}
 El día de la semana ${fecha.getDay()}
 La hora es ${fecha.getHours()} `;

var consulta = `Consulta: ${fecha.getDate()}-${
  fecha.getMonth() + 1
}-${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}`;

window.addEventListener("load", () => {
  var span = document.querySelector(".horaConsulta");
  if (span == null) console.error("Span error");
  span.innerHTML = consulta;
});
