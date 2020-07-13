var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //    In MongoDB, a database is not created until it gets content!
  console.log("Database created!");
    
  var dbo = db.db("nodedb")
  
  dbo.createCollection("customers",function(err,res) {
      if(err) throw err;
      console.log("Collection created ")
      db.close();
  })
  
});