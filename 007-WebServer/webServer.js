//----------------------------------------------------------------------------------------
//Loading modules and  creating the    HTTP server
//----------------------------------------------------------------------------------------
var url = require("url"); 
var http = require("http"); 
var server = http.createServer(onRequest).listen(8080) ;
console.log  ("Server is up and running") ; 

//----------------------------------------------------------------------------------------
// 1st callback: on success
//----------------------------------------------------------------------------------------
function onRequest(req, res) 
{ 
    var path = url.parse(req.url).pathname;     
    console.log("Server parsed path: "  + path); 
    var fs = require('fs');     
    switch (path){             
        case '/'  :                 
        fs.readFile(__dirname + '/index.html',function(err, content){         
            if (err){             
                res.writeHead(500 );              
                return res.end('Error loading file');
            }         
            res.writeHead(200);         
            res.end(content);     
        });            
            break;
        case '/studenti':
                fs.readFile(__dirname + '/studenti.html',function(err, content){         
                    if (err){             
                        res.writeHead(500 );              
                        return res.end('Error loading file');
                    }         
                    res.writeHead(200);         
                    res.end(content);     
                });  
            break;  
            case '/insegnanti':
                fs.readFile(__dirname + '/insegnanti.html',function(err, content){         
                    if (err){             
                        res.writeHead(500 );              
                        return res.end('Error loading file');
                    }         
                    res.writeHead(200);         
                    res.end(content);     
                });  
            break;  
            case '/prova':
                fs.readFile(__dirname + '/prova.html',function(err, content){         
                    if (err){             
                        res.writeHead(500 );              
                        return res.end('Error loading file');
                    }         
                    res.writeHead(200);         
                    res.end(content);     
                });  
            break;             
        default: pageNotFound(res) ;     
    }
}
//----------------------------------------------------------------------------------------
// 2nd callback: on failure
//----------------------------------------------------------------------------------------
function pageNotFound(res)
{ 
    res.writeHead(404);     
    res.end('404 - Not  Found'); 
}