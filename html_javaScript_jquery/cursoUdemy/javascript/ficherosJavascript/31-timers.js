"use strict";


window.addEventListener("load",(event)=>{

    //Timers
    // ? Se va a ejecutar cada 3500 ms 
    function intervalo(){
        var tiempo = setInterval((event)=>{
            console.log("Cambioo");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize =="50px"){
                encabezado.style.fontSize = "30px"
            }else{
                encabezado.style.fontSize = "50px"
            }
    
        },1500);
        return tiempo;
    }
    
    var tiempo = intervalo();

    // ? Solo se va a ejecutar una vez, pasados los ms indicados
    var otro = setTimeout(()=>{
        document.querySelector("h1").style.background = "grey";
    },5000);

    var stop = document.querySelector("#stop");
    stop.addEventListener("click", (event)=>
    {
        alert("Parando Intervalo");
        clearInterval(tiempo);


    });

    var start = document.querySelector("#start");
    start.addEventListener("click", (event)=>
    {
        alert("Iniciando Intervalo en bucle");
        intervalo();


    });


});