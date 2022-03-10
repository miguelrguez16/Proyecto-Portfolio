"use strict";

function calculator(n1, n2, mostrar = false) {
  if (!mostrar) {
    console.log("Suma " + (n1 + n2));
    console.log("Resta " + (n1 - n2));
    console.log("Multiplicacion " + (n1 * n2));
    console.log("Division " + (n1 / n2));
    console.log(mostrar);
  }else{
    document.write("Suma " + (n1 + n2) + "</br>");
    document.write("Resta " + (n1 - n2)+ "</br>");
    document.write("Multiplicacion " + (n1 * n2)+ "</br>");
    document.write("Division " + (n1 / n2)+ "</br>");
    //document.write(mostrar);
  }
}

calculator(3, 13,true);
