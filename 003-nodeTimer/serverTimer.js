var http = require("http");
var myTimerInt;
var mytimerOut;
//--------------------------------------
http.createServer(onRequest).listen(8080);
//--------------------------------------
function onRequest (request,reponse){
    reponse.writeHead(200,{"Content-Type":"text/plain"});
    mytimerOut = setTimeout(function(){
        clearInterval(myTimerInt);
        reponse.end("This is end...");
    },5000);
    myTimerInt = setInterval(function(){
        reponse.write("Ciao Mondo");
    },1000)
}