var exp=require('express');

var app = exp();


app.get('/home',function(req,res){
	res.send("<h1> Welcome To Web App </h1>");
})
app.listen(9000,function(){
	console.log("Express server starts on 9000");
})