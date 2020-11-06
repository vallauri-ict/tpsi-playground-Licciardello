let http=require('http');
let fs=require("fs");//file system
let dispatcher = require("./HTTPDispatcher.js");
//------------------------------------------------------
dispatcher.addListener("get","/",function(req,res){
fs.readFile(__dirname+"/index.html",function(err,content)
{
    if(err)
    {
        res.writeHead(500);
        return res.end("Error loading file");
    }
    res.writeHead(200);
    res.end(content);

})
});
//----------------------------
dispatcher.addListener("get","/page2",function(req,res){
    fs.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Page two");
});
//------------------------
    dispatcher.addListener("post","/login",function(req,res){
        fs.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Page one");
    })
//--------------------------------    
    http.createServer(function(req,res){
        dispatcher.dispatch(req,res);
    }).listen(8080);
//----------------------------------------
console.log("server is up and running");
console.log(dispatcher.showlist);

