var exp=require('express');
var app=exp();
app.listen(9000,function(){console.log("Server started on 9000")});

app.use(exp.static('images'));

/* app.get('/image',function(req,res){
	res.send("<img src='sunset.jpg' width='200' height='200'>")
}) */

app.get('/Login',function(req,res){
	res.sendFile(__dirname+"/LoginForm_background.html");
});
 



app.all('*',function(req,res){
	res.send("Invalid Url");
	})