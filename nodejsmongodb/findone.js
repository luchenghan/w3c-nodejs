
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo =db.db("nodedb")

    //find one
    dbo.collection("customers").findOne({}, function(err, result){
        if(err) throw err;
        console.log(result.name);
        db.close()
    })

    // find all
    dbo.collection("customers").find({}).toArray(function(err, result){
        if(err) throw err;
        console.log(result)
        db.close()
    })

    // find some use projection find fields
    //you are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field).
    dbo.collection("customers").find({}, { projection:  {_id: 0, name: 1, address: 1}}).toArray(function(err, result){
        if(err) throw err;
        console.log(result)
        db.close()
    })
    // limit method
    dbo.collection("customers").find({}, { projection:  {_id: 0, name: 1, address: 1}}).limit(4).toArray(function(err, result){
        if(err) throw err;
        console.log(result)
        db.close()
    })
})