var u=require('url');
var h=require('http');

h.createServer(function(req,res){
	var url_p=u.parse(req.url,true);
	console.log(url_p.pathname);
	console.log(url_p.query);
	console.log(url_p.query.name);
	console.log(url_p.query.color);
	var nm=url_p.query.name;
	var cl=url_p.query.color;
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h1 style='color:"+cl+"'> Welcome "+nm+"</h1>");
	res.end();
}).listen(9000,function(){console.log("Started ")});