var http = require('http');
var fs = require('fs');
var mime = require('mime')
var staticServer= require("./internals/static-server.js");
// importando manejadores 
var handlers = require("./internals/handlers");

//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;

// Codigo del server 
var server = http.createServer(function(req, res){
    var url = req.url;
        console.log(`> Recurso solicitado> ${url}`);
    if(url == "/"){
        url = '/index.html'
    }
    // verificando si la url esta 
    // asociada a una accion 
    //que puede hacer el server
    if(typeof(handlers[url]) === "function"){
        // si existe una funcion en handlers llamada 
        // como el contenido de la variable url
        handlers[url](req, res);

    }else {
        // no se encontro un manejador para la url
        //solicitada por el usuario 
        // se intentara sercer de manera estatica
    staticServer.serve(url,res);
    }
// genera la ruta real 
// del archivo solicitado
    });
server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});