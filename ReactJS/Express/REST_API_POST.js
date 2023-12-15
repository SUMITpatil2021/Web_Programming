var exp=require('express')
var mysql=require('mysql2');
var bp=require('body-parser');
var cors=require('cors')

var app=exp();

app.listen(9000,function(){console.log("Server started on 9000")});

app.use(cors());
app.use(bp.json());



var conn=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"sumit",
	database:"knowit"
});

conn.connect(function(err){
	if(!err)
		console.log("database connection success");
	else
		console.log("database coneection failed");
})

app.post('/insertData',function(req,res){
	var eno=req.body.empno;
	var enm=req.body.ename;
	var j=req.body.job;
	var salary=req.body.sal;
	var query="insert into emp(EMPNO,ENAME,JOB,SAL) values (?,?,?,?)" 
	
 	conn.query(query,[eno,enm,j,salary],function(err){ 
		console.log(eno,enm,j,salary);
		if(!err)
			res.send("Success");
		else
			res.send("Failure");
	})
	
});

app.all('*',function(req,res){
	res.send("<h3>Invalid Url </h3>");
})