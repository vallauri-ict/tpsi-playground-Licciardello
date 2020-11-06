const { Console } = require('console');
const { METHODS } = require('http');

let HttpDispatcher= function()
{
    this.loadingName="Dispatcher >> ";
    this.list={get:[],post:[]};
    this.addListener=function(method,url,cb)
    {
        this.list[method].push({"cb":cb,"url":url});
    }
}
//------------------------------------------------
HttpDispatcher.prototype.showlist=function(){
    console.log(this.loadingName+" Registered listeners :n");
    for(method in this.list)
    {
        console.log(method+ " ---> "+ this.list[method].lenght+" listeners");
        for(listener of thsis.list[method])
        {
            console.log("url : "+listener.url+" cb: " +listener.cb);
        }
    }
}
//--------------------------------------------
HttpDispatcher.prototype.dispatch=function(req,res)
{
let parseURL= require('url').parse(req.url,true).pathname;
let method = req.method.toLowerCase();
for(listener of this.lis[method])
{
    if(listener.url===parseURL)
    listener.cb(req,res);
}
}
//--------------------------------------------------------
module.exports=HttpDispatcher();

