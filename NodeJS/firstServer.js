var h=require('http');

var server=h.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1>Welcome to NodeJs</h1>");
	res.end();	
});

server.listen(2021,function(){
	console.log("Server Starts on Port 2021");
	});