var exp=require('express');
var mysql=require('mysql2');
var app=exp();
app.listen(9000,function(){
    console.log("Express Server started on 9000");
});

app.use(exp.static('resources'));

 var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sumit",
    database:"knowit"
 })

 con.connect(function(err){
    if(!err)
    {
        console.log("Database Connected ");
    }
    else
    {
        console.log("Database not connected ");
    }
 })

app.get('/user',function(req,res){
    res.sendFile(__dirname+"/registrationform.html");
});

app.get('/ErrMsg',function(req,res){
 user=req.query.uid;
var query="select ename from emp where ename='"+user+"'";
con.query(query,function(err,result){
    console.log(query);
  
    if(!err)
    {   
        // var name=result.ename;
        // console.log(name);
        if(user==result[0].ename)
        {
            
            res.send("<h3> user name Already taken </h3>");
        }
        else
        {
             res.send("<h3>Username available </h3>");
        }
    }
    else
    {
        console.log("Incorrect Query ");
    }
   
})
})

app.all('*',function(req,res){
    res.send("<h3>Invalid URL</h3");
})