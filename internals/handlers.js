
var fortune = require("./fortune");
// creando el handler
// getfortune
var _crackTheCookie = function(req, res){
console.log("> Cookie crash requested....");
fortune.getFortune(function(fortunePaperObj){
    //
    //
    res.writeHead(200,{
        "Content-Type" : "application/json"
    });
    // respondiendo con el objeto
    res.end(fortunePaperObj);
});


//res.end("El exito es la suma del trabajo mas la disciplina")
};

var _gertAuthor = function(req, res){
    console.log("Se solicito: Author");
    res.end("Alan Joan Montecinos Silva")
}

// Creando Objeto manejador
var handlers = {};

// Registrando manejadores en el 
//objeto manejador

handlers["/crackthecookie"] = _crackTheCookie;
handlers["/getAuthor"] = _gertAuthor;
// exportando objeto manejador
module.exports = handlers; 