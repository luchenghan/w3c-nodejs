var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    port:"3306",  
    user: "root",
    password: "password",
    database: "nodedb"
})

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
      if (err) throw err;

      console.log(result[2].name)   // result object
      console.log(fields);  //fields object

    });
    con.query("SELECT name, address FROM customers WHERE name = 'Amy'", function (err, result, fields) {
      if (err) throw err;

      console.log(result)
    });
});