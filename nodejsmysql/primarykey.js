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
    var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("update table add id column")
    })
})