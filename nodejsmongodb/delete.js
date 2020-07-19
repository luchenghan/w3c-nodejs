var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodedb");
  var delone = { address: 'Highway 37' };
  dbo.collection("customers").deleteOne(delone, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });


  var delmany= {address: /^S/}
  dbo.collection("customers").deleteMany(delmany, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});