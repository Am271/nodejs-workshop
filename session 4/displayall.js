mongodbClient = require("mongodb").MongoClient;
url = "mongodb://localhost:27017";

mongodbClient.connect(
    url,
    {useUnifiedTopology: true},
    function(err, client) {
        if (err) throw err;
        db = client.db("test");
        db.collection("students")
        .find({})
        .toArray(function(err, data) {
            if (err) throw err;
            console.log(data);
            client.close();
        });
    }
);