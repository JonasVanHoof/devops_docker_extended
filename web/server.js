//import express
const express = require('express')
const mysql = require('mysql')
console.log("imported express & mysql")

//set app
var app = express()

//database settings
var db = mysql.createConnection({
    host: 'db',
    user: 'jonas',
    password: 'vanhoof',
    database: 'employees'
});
//connect to database
db.connect();

//server setting
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening on", host, port)
})

//default route
app.get('/', function(req, res){
    res.send("Hello world");
});

app.get('/api/employees', function(req,res){
    db.query('SELECT * FROM employees LIMIT 50', (err, result) => {
        res.send(result);
    });    
});
