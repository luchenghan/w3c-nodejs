var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    port:"3306",  
    user: "root",
    password: "password",
    database: "nodedb"
})

con.connect(function(err){
    if (err) throw err
    console.log("Connected!")
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created")
    })
})