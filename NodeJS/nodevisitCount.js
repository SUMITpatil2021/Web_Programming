var http=require('http');
var url=require('url');
var fs=require('fs');  

http.createServer(function(req,res){
	var url_p=url.parse(req.url,true);
	var path=url_p.pathname;
	
	if(path=='/favicon.ico')
		{
			return;	
		}
	fs.readFile('visitCount.txt',function(err,data) { 
		if(!err)
	 	{
			var number=parseInt(data.toString());
			number++;
			fs.writeFile('visitCount.txt',number+"",function(err) {
					console.log("visit count updated ")
					})

			res.writeHead(200,{'content-type':'text/html'});
			res.write("<h3>visit count : "+number+"</h3>");	
			res.end();
	 	} 
		else
		{
		res.writeHead(200,{'content-type':'text/html'});
			res.write("<h3>File Count  not increased </h3>");	
			res.end();	
		}	
		}) 

	

}).listen(9000,function(){console.log("Server Started On 9000")})
