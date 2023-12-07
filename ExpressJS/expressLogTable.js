var exp=require('express'); 
var fs=require('fs');
var url=require('url');

var app=exp(); 
app.listen(9000,function(){console.log("Server Started on 9000")});


app.use(function(req,res,next){
var url_p=url.parse(req.url,true);
var path=url_p.pathname;
var str="Request Receieved for "+path+" at "+new Date()+"\n";
fs.appendFile('LogTable.txt',str,function(){
	res.writeHead(200,{'content-tpye':'text/html'})
	res.write("<h1> Request Logged </h1>");
	res.end();
next();	
})


})


app.get('/home',function(req,res){
	res.send("<h1> Hello from Express </h1>");
})


app.all('*',function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1> Invalid URL </h1>");
})	