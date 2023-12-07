var exp=require('express');
var mysql=require('mysql2');

var bp=require('body-parser');
var app=exp();

app.listen(9000,function(){console.log("Server Started on 9000")});

 var con=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"sumit",
	database:"knowit"
	});

con.connect(function(err){
	if(!err)
	{
	 console.log("database connected ");
	}
	else
	{
	console.log("database connection failed ");
	}
});
 

app.get('/emps',function(req,res){
	con.query("select * from emp",function(err,result){
	if(!err)
		{
		res.write("<table border=1>"); 
			result.forEach(function(emp){
			res.write("<tr>");
				res.write("<td>"+emp.EMPNO+"</td>");
				res.write("<td>"+emp.ENAME+"</td>");
				res.write("<td>"+emp.JOB+"</td>");
				res.write("<td>"+emp.MGR+"</td>");
				res.write("<td>"+emp.HIREDATE+"</td>");
				res.write("<td>"+emp.SAL+"</td>");
				res.write("<td>"+emp.COMM+"</td>");
				res.write("<td>"+emp.DEPTNO+"</td>");
			res.write("</tr>");
			})	
		res.write("</table>");
		res.end();
		}
	});
	
});