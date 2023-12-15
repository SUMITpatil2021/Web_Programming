var exp=require("express");
var mysql=require("mysql2");
var cors=require('cors');

var app=exp();

app.use(cors());


var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sumit",
    database:"knowit"

});

con.connect(function(err){
    if(!err)
    {
        console.log("database connection sucess")
    }
    else
    {
        console.log("database connection failed")

    }
})


app.get(function(req,res){

})
app.listen(9000,function(){
    console.log(" Server started on 9000");
})



app.get('/emps',function(req,res){
    console.log("Req received");
    var query="select * from emp " ;
    con.query(query,function(err,result){
        console.log(query);
        if(!err)
        {
            res.json(result)
        }
        else
        {
            console.log("Query Falied ");
        }
    })
});

app.all('*',function(req,res){
    res.send("<h1> Invalid URL </h1>")
})