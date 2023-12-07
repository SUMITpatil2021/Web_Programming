var exp=require('express');
var app=exp();
app.listen(9000,function(){console.log("Server started on 9000")});
app.get('/home',function(req,res){
	res.send("<h1>Welcome to Home</h1>");
});

app.get('/index',function(req,res){
	res.send("<h1>Welcome to Index</h1>");
	})
app.all('*',function(req,res){
	res.send("Invalid Url");
	})