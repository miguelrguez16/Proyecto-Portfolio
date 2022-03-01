"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
// cargar archivo de rutas
var proyect_rutas = require("./rutas/proyect.rutas");

// capa de middleware, accion antes de una peticion
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //cualquier cosa que le llegue la convertira a json

// CORS
// Configurar cabeceras y cors
// para el paso a produccion haya que cambiar el asterisco
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//RUTAS
app.use('/api',proyect_rutas);
//export
module.exports = app;
