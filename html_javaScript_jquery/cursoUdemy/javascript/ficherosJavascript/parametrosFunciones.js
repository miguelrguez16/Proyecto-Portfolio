"use strict";
// PArametros REST y SPREAD

function listadoFrutas( ...resto){
    resto.forEach(element => {
        console.log("Fruta: ", element);
    });

}

listadoFrutas("Naranja", "manzana","PERAS","UNOS BUENOS MELONES")
console.log("Lista 2");

var fruta = ["manzanica", "pera", "mondarina"];
// hay diferencia entre
listadoFrutas(fruta); //NO LO SEPARA
listadoFrutas(...fruta); 
let arr = [1, 2, 3, ...[..."456"].map(x=>parseInt(x))]; // [1, 2, 3, 4, 5, 6]
console.log(arr);