"use strict";

// importamos el modelo
var Project = require("../models/proyect");
var fs = require("fs");

// permite cargar rutas de nuestro propio entorno
var path = require("path");


// CONTROLADOR
var controller = {
  home: function (req, res) {
    return res.status(200).send({
      message: " Welcome home",
    });
  },
  test: function (req, res) {
    console.log(req);
    return res.status(200).send({
      message: " Welcome Res"
    });
  },
  saveProyect: function (req, res) {
    var project = new Project();

    var parametrosReq = req.body;

    project.name = parametrosReq.name;
    project.description = parametrosReq.description;
    project.category = parametrosReq.category;
    project.year = parametrosReq.year;
    project.langs = parametrosReq.langs;
    project.image = null;

    project.save((err, projectStored) => {
      if (err)
        return res.status(500).send({ message: "ERROR GUARDAR", err: err });

      if (!projectStored)
        return res.status(404).send({ message: "NO se ha podido guardar" });
      console.log("save-proyect: OK ", projectStored.id);
      return res.status(200).send({ project: projectStored });
    });
  },
  getProyect: function (req, res) {
    var searchID = req.params.id;

    if (searchID == null)
      return res.status(404).send({ message: "NO EXISTE EL PROYECTO:1" });
    console.log("buscando: ", searchID);
    Project.findById(searchID, (err, project) => {
      if (err)
        return res
          .status(500)
          .send({ message: "ERROR DEVOLVER DATOS 1", err: err });
      if (!project)
        return res.status(404).send({ message: "NO EXISTE EL PROYECTO:2" });
      return res.status(200).send({ project });
    });
  },
  getProyects: function (req, res) {
    Project.find({}).sort("+year")
      .exec((err, projects) => {
        if (err)
          return res.status(500).send({ message: "ERROR DEVOLVER DATOS 2", err: err });

        if (!projects)
          return res.status(404).send({ message: "NO HAY PROYECTOS PARA MOSTRAR" });

        console.log("obteniendo proyectos");
        return res.status(200).send({ projects });
      });
  },
  updateProyect: function (req, res) {
    var searchID = req.params.id;
    if (searchID == null)
      return res.status(404).send({ message: "NO EXISTE EL PROYECTO A ACTUALIZAR:1" });
    console.log("actualizar: ", searchID);
    // obtenemos los valores pasados en la peticion
    var updateValues = req.body;

    Project.findByIdAndUpdate(searchID,updateValues,{ new: true },(err, proyectUpdated) => {
        if (err)
          return res.status(500).send({ 
            message: "ERROR ACTUALIZAR DATOS", err: err 
          });

        if (!proyectUpdated)
          return res.status(404).send({ 
            message: "NO HAY PROYECTO PARA EDITAR" 
          });

        return res.status(200).send({ proyect: proyectUpdated });
      }
    );
  },
  deleteProyect: function (req, res) {
    var searchID = req.params.id;
    console.log("eliminando: ", searchID);
    Project.findByIdAndRemove(searchID, (err, proyectDelete) => {
      if (err)
        return res.status(500).send({
          message: "ERROR ELIMINAR DATOS",
          err: err,
        });
      if (!proyectDelete)
        return res.status(404).send({
          message: "NO HAY PROYECTO PARA ELIMINAR",
        });

      return res.status(200).send({ proyect: proyectDelete });
    });
  },
  uploadImage: function (req, res) {
    var id = req.params.id;
    console.log("subiendo foto");

    var fileName = "Imagen No subida";
    if (req.files) {
      var filePath = req.files.image.path;
      var fileName = filePath.split("\\")[1];
      var extension = fileName.split(".")[1];

      if(extension =="jpg" ||extension =="jpeg" ||extension =="png" ||extension =="gif" ){
        Project.findByIdAndUpdate( id, {image: fileName },{new:true},
          (err, proyectUpdate) => {
            if (err) return res.status(500).send({ message: "ERROR: IMAGEN NO SUBIDA", err: err });
            if (!proyectUpdate) return res.status(404).send({ message: "ERROR: NO EXISTE EL PRYECTO" });
  
            return res.status(200).send({ proyect: proyectUpdate });
          }
        );
      }else{
          fs.unlink(filePath, (err)=>{
            console.log("foto no valida");
            return res.status(200).send({message: "Extension no valida"});
          });
      }
      
    }else{
      return res.status(200).send({message : fileName});
    }
  },
  getImageFile: function (req, res) {
    var image = req.params.image;
    var path_file ='./uploads/'+image;
    console.log("obteniendo imagen: ", image);
    fs.exists(path_file, (exists)=> {
        if(exists){
          return res.sendFile(path.resolve(path_file));
        }else {
          return res.status(200).send({
              message: "No existe la imagen"
              });
        }
    })

  }
};

module.exports = controller;
