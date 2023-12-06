var exp=require('express');

var app = exp();


/* app.get('/home',function(req,res){
	res.send("<h1> Welcome To Web App </h1>");
})  */

app.get('/LoginForm',function(req,res){
	res.sendFile(__dirname+"/LoginForm.html");
})

app.get('/checkpwd',function(req,res){
	if(req.query.uid=='object' && req.query.pwd=='knowit')
	{
		res.send("<h1>Login Successful !!!</h1>");
	}
	else
	{
		res.send("<h1>Login Failed !!!</h1>");
	}
})

app.listen(9000,function(){
	console.log("Express server starts on 9000");
})