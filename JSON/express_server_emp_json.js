var exp=require('express');
var mysql=require('mysql2');
var bp=require('body-parser');
var app=exp();
app.listen(9000,function(){
    console.log("Server Started on 9000");
}) 

app.use(exp.static('resources'));
app.use(bp.urlencoded({extended:false}));

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sumit",
    database:"knowit"
});

con.connect(function(err){
    if(!err)
    {
        console.log("Database Connected");
    }
    else
    {
        console.log("Database connection Failed ");
    }
});

app.get('/emp',function(req,res){
    res.sendFile(__dirname+"/emp.html")
}) 

app.post('/getDetails',function(req,res){
    var dept=req.body.deptno;
    var query="select empno,ename,job,sal from emp where deptno="+dept; 
    console.log(query);
    con.query(query,function(err,result){
        if(!err)
        {
            res.send(JSON.stringify(result));
        }
        else
        {
            console.log("Incorrect query ");
        }
    })
})

app.all('*',function(req,res){
    res.send("<h3>Inavlid URL</h3>");
})