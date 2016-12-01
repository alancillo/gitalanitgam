var http = require('http');
var fs = require('fs');
var mime = require('mime');


var staticServer= require("./internals/static-server.js");


//Importando configuraciones
var config = require('./config/config');
//importar manejadores "handlers"
var handlers = require("./internals/handlers");
var IP = config.IP,
    PORT = config.PORT;

var server = http.createServer(function(req, res){
    var url = req.url;
    console.log(`> Se servirá archivo: ${url}`);
    if(url === "/"){
        url = '/index.html'
    }
    //verify if the url is asocied to one action that can do a server
      if (typeof (handlers[url])=== "function") {
          //si eciste una funcion como el contenido de la variable url
          handlers[url](req,res);
          
      }else{
          // no se enontro un manejador asociado a su URL solicitada
          //se intentara servir de manera estatica 
          
            staticServer.serve(url, res);
      }

    console.log(`> Recurso solicitado> ${url}`);
    staticServer.serve(url, res);
    
    //Seleccionar el tipo de mime
    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});

