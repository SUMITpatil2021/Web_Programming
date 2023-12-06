var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	var url_p=url.parse(req.url,true);
	var path =url_p.pathname;
	var filepath= path.substring(1);
	fs.readFile(filepath,function(err,data) {
		if(!err) 
		 {
		    res.writeHead(200,{'content-type':'text/html'});
		    res.write(data.toString()); 
		    res.end();
		 }
	        else
		{
		  res.writeHead(200,{'content-type':'text/html'});
		    res.write("File Not Found "); 
		    res.end();
		}
		})
}).listen(9000,function(){console.log("Server Started on 9000")});