var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    port:"3306",  
    user: "root",
    password: "password"
})

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!")
    var sql = "CREATE DATABASE nodedb"  //create database

    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Database created")
    })
})