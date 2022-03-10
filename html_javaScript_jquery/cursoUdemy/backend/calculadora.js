"use strict";

// capturar parameotrs

var params = process.argv.slice(2);
console.log("Hola Mundo ");

var n1 = parseFloat(params[0]);
var n2 = parseFloat(params[1]);
console.log(params);
console.log(n1,n2);


var plantilla = `
    suma: ${n1 + n2}
    resta: ${n1 - n2}
    multiplicacion: ${n1 * n2}
    division: ${n1 / n2}
`
console.log(plantilla);