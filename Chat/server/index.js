"use strict";
// cargamos express
var express = require("express");
//creamos la app de express
var app = express();
//cargamos servidor indicandole que su capa de app es http
var server = require("http").Server(app);
//indicamos a io que se va a utilizar en nuestro servidor
var io = require("socket.io")(server,{
    cors:{ //Permitir el acceso de origenes mixtos
        origin: "*"
    }
});

// vista estatica  --> middleware
app.use(express.static('client'));

//Creancion de ruta para test
app.get("/test", function(req,res){
    //console.log(res);
    res.status(200).send("Server: OK");
});

var messages =[{
    id:1,
    text:"Bienvenido al chat",
    nickname:"bot"
}];

//recibe las nuevas conexiones de los distintos clientes
io.on('connection', function(socket){
    //console.log(socket);
    var ip = socket.handshake.address.split(":")[3];
    console.log("New Node connected from: " + ip);
    //emitimos mensaje principal
    socket.emit('messages', messages);
    // emitir nuevos mensajes
    socket.on('add-message', function (data) {
        messages.push(data);
        // reenviamos a todos los mensajes de nuevo
        socket.emit('messages', messages);
      });

});


// indicamos al servidor puerto en el que esta
server.listen(7373, ()=>{
    console.log("Servidor en http://localhost:7373");
});

