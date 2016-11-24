
var fortunes = [
    "En todo tiempo ama el amigo",
    "Irving que nace torcido ",
    "Para tener éxito, primero debemos creer que podemos",
    "El éxito es un maestro pésimo",
    "Seduce a las personas inteligentes a pensar que no pueden perder",
    "Está bien celebrar el éxito pero es más importante prestar atención a las lecciones del fracaso"
];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
    "getFortune" : function(cb){
        // construyo un objeto respuesta 
        var selector = getRandomNumber(0,fortunes.length -1);
        var fortuneMessage = fortunes[selector];
        var fortunePaperObject = {
            "paper" : fortuneMessage
        };
        cb(JSON.stringify(fortunePaperObject));
    }
};