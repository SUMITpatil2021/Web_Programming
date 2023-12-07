var exp=require('express');
var app=exp();
app.listen(9000,function(){
	console.log("Server Started on 9000");
});

app.use(exp.static('images'));
app.use(exp.static('styles'));

app.get('/Login',function(req,res){
	res.sendFile(__dirname+"/LoginForm_Background.html");
});

app.all('*',function(req,res){

res.send("<h1> Invalid Url </h1>");		
})