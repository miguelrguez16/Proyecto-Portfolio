"use strict";
// conexion base de datos
var mongoose = require("mongoose");
var dbUri = "mongodb+srv://miguelucu16:ALGOOOOOO@eol.rp9fe.mongodb.net/PortFolioBackend?retryWrites=true&w=majority";

//creacion servidor
var app = require("./app");
var port = 8080;

mongoose.Promise = global.Promise;
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("BBDD: en linea...");

    app.listen(port, () => {
      console.log("APP: en linea...");
      console.log("--> localhost:8080");

    });
  })
  .catch((err) => console.log(err));
