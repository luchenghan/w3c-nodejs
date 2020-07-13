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
      
      console.log(result[2].name)   // third record name
      console.log(fields);  //fields object

    });

    con.query("SELECT name, address FROM customers WHERE name = 'Amy'", function (err, result, fields) {
      if (err) throw err;

      console.log(result)
    });

    //Escaping  query values to  prevent sql injection
    var name = 'Peter';
    var sql = 'SELECT * FROM customers WHERE name = ' + mysql.escape(name);
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result)
    });

    var name2 = 'Ben'
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    con.query(sql, [name2,adr], function (err, result) {
      if (err) throw err;
      console.log(result)
    });
});