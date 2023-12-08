var exp=require('express');

var app=exp();

app.listen(9000,function(){
console.log("Express Server starts on 9000");
});

app.get('/welcome',function(req,res){
    res.sendFile(__dirname+"/ajaxFirst.html");
}) 

app.get('/welcomeMsg',function(req,res){
    var inputid=req.query.uid;

    // res.write("<h1>Welcome"+inputid+"</h1>");
    // res.end();
    res.send("<h1>Welcome "+inputid+"</h1>");
})

app.all('*',function(req,res){
   res.send("<h3>Invalid Url</h3>"); 
});