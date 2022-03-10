"use strict";
for (let i = 1; i <= 2; i++) {
  console.log(i);
  //debugger; // invoca la funcionalidad de debuguear en esa linea de codigo si está disponible
}

var i = 0;
while(i < 2){
  console.log("hola");
  i++;
  if(i==1){break;}//corta la ejecucion
}
/**
 * Evalua la condicion de parada despues del primer caso
 */
do {
  console.log("hola holita vecinito")
  i++;
} while (i <10);