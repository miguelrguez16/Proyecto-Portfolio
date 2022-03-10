"use strict";

// Local Storage

// Tenemos que mirar si es compatible con el navegador 
if(typeof Storage != 'undefined'){console.log("LocalStorage compatible");}
else {console.log("LocalStorage incompatible");}


// Guardar datos en el LocalStorage

localStorage.setItem("token", 25458545846545);

// Recuperar elemento
window.addEventListener("load",()=>{


    var usuarioRegistrado = {
        nombre: "Miguel Rodríguez",
        email: "miguerguez@gmail.com",
        token: 78458454274752486547,
        web: "https://todolibrosypeliculas.blogspot.com"
    };
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado));

    var token = String(localStorage.getItem("token"));
    var caja = document.querySelector("#caja");
    caja.innerHTML = token;

    caja.append(document.createElement("br"));
    var tmp = JSON.parse(localStorage.getItem("usuarioRegistrado"));
    caja.append(" " + tmp.nombre + " - " + tmp.web);



    
    
    
    
    localStorage.clear();
})





// Recuperar Objeto
