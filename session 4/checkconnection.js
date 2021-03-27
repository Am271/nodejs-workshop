mongodbClient = require("mongodb").MongoClient;
url = "mongodb://localhost:27017/test";

mongodbClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if(err) throw err;
    console.log("Connection successful!");

});