var exp=require('express');
var mysql=require('mysql2');
var app=exp();
app.listen(9000,function(){
    console.log("Express Server started on 9000");
});

 var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sumit",
    database:"knowit"
 })

 con.connect()

app.get('/user',function(req,res){
    res.sendFile(__dirname+"/registrationform.html")
})

app.get('/ErrMsg',function(req,res){

})

app.all('*',function(req,res){
    res.send("<h3>Invalid URL</h3")
})