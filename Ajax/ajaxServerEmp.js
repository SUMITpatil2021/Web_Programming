var exp = require('express');
var mysql = require('mysql2');


var app = exp(); 


app.listen(9000, function () {
    console.log("Express Server started on 9000");
});

app.use(exp.static('resources'));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sumit",
    database: "knowit"
});

con.connect(function (err) {
    if (!err) {
        console.log("Database connected");
    }
    else {
        console.log("Databse connecton failed ");
    }
})

app.get('/emp', function (req, res) {
    res.sendFile(__dirname + "/emp.html");
});

app.get('/empDetails', function (req, res) {
    var eno = req.query.empid;
    var query = "select empno,ename,job,sal from emp where empno="+eno;
    con.query(query,function(err,result){
        if(!err)
        {
            res.write("<table border=1>");
                res.write("<tr>");
                    res.write("<th>Empno</th>");
                    res.write("<th>Ename</th>");
                    res.write("<th>Job</th>");
                    res.write("<th>sal</th>");
                res.write("</tr>");

                res.write("<tr>");
                    res.write("<td>"+result[0].empno+"</td>");
                    res.write("<td>"+result[0].ename+"</td>");
                    res.write("<td>"+result[0].job+"</td>");
                    res.write("<td>"+result[0].sal+"</td>");
                res.write("</tr>");

                
               
            res.write("</table>"); 
            res.end();
        }
        else
        {
            res.send("<h3>Empid not found </h3>");
        }
    })

})



app.all('*', function (req, res) {
    res.send("<h3>Inavlid URL </h3>");
});