var fs=require("fs");
var app=require("http").createServer(mainHandler).listen(8080);
console.log(__dirname);

function mainHandler(req,res){
    fs.readFile(__dirname+'/index.html',function(err,content){
        if(err){
            res.writeHead(500);
            return res.end('Error loading file');
        }
        res.writeHead(200);
        res.end(content);
    })
}