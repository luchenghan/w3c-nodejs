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

    var innerjoin = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(innerjoin, function(err, result){
        if(err) throw err;
        console.log(result)
    })

    var leftjoin ="SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
    con.query(leftjoin, function(err, result){
        if(err) throw err;
        console.log(result)
    })

    var rightjoin ="SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
    con.query(rightjoin, function(err, result){
        if(err) throw err;
        console.log(result)
    })
})