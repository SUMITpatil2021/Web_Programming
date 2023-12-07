var exp=require('express');

var bp=require('body-parser');
var app=exp();

app.listen(9000,function(){console.log("Server Started on 9000")})




app.use(bp.urlencoded({extended:false}));	

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/LoginForm.html");
});

app.post('/logincheck',function(req,res){
	if(req.body.uid=='object' && req.body.pwd=='object123')
	{
		res.send("<h1>Login Successful !!!");	
	}
	else
	{
		res.redirect('/login');
	}
});

app.all('*',function(res,req){
	res.send("<h1>Invalid URL </h1>");
});