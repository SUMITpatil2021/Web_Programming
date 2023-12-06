var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	var url_p=url.parse(req.url,true);
	var path=url_p.pathname;
	var str="Request Received for "+path+" at "+new Date()+"\n"; 
	fs.appendFile('LogTable.txt',str,function(){
			res.writeHead(200,{'content-type':'text/html'});	
			res.write("<h3> Request Logged !!</h3>");
			res.end();
		})
	
	
}).listen(9000,function(){console.log("Server Starting on 9000")})