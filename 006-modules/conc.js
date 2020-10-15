var http= require('http');
console.log("Server is up and running");
//---------------------------------
sertInterval(function() {
console.log("Slow cycle");
},3000);

//------------------------------------
setInterval(function() {
    http.get({host:'www.vallauri.edu'},function (res){
        console.log("HT connection: ")+res.headers.connection;
    })
}, 1000);