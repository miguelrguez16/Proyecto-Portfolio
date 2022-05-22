"use strict";
const dotenv = require('dotenv').config();
const passwordMONGO = process.env.MONGO;
// conexion base de datos
var mongoose = require("mongoose");
var dbUri = "mongodb+srv://miguelucu16:" + passwordMONGO + "@eol.rp9fe.mongodb.net/PortFolioBackend?retryWrites=true&w=majority"
//creacion servidor
var app = require("./app");
var port = 8080;

mongoose.Promise = global.Promise;
mongoose
  .connect(dbUri)
  .then(() => {
    console.log("\tBBDD UP...");

    app.listen(port, () => {
      console.log("\tAPP: en linea...");
      console.log("\t--> localhost:8080");

    });
  })
  .catch((err) => console.error(err));
