'use strict'   // Activar declaracion modo estricta de javascript
console.log("declaracion 03-let-var.js")


// pruebas con let y var

var numero = 40;
console.log("numero"); //valor 40

if(true){
    var numero = 50;
    console.log("numero"); //valor 50
}
console.log("numero");



// prueba let
var texto =" CURSO js ";
console.log(texto);

if(true) {
    console.log("dentro del if");
    let texto = "CURSO"; console.log(texto);
}
console.log("Fuera del if")
console.log(texto);
