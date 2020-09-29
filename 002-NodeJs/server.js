var http=require("http");//creiamo una comunicazione con il protocollo http//per specificare il modulo (livello 4 di trasporto)
http.createServer(onRequest).listen(8080);  //crea il server grazie al modulo e ci associamo una callback //.listen(8080) imposta la porta di ascolto
console.log("Server is up and running");//callback
//--------------------------------------------
function onRequest(request,reponse){//capisco che è stata fatta la richiesta
    console.log("server - onRequest");//console.log ("inserisce una stringa e la faccio scrivere")lato server
    reponse.writeHead(200,{"Content-Type":"text/plain"});//intestazione protocollo http //setto elementi di risposta//200 protocollo ok//json
    reponse.write ("Ciao mondo!");
    reponse.end();
}
