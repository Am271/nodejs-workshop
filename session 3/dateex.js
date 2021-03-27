express = require("express");

app = express();

app.get("/", function(req, res) {
    date = new Date();
    month = date.getMonth() + 1;
    res.send("<h1>" + date.getDate() + "/" + month + "/" + date.getFullYear());
});

app.listen(9000, function() {
    console.log("Listening on port 9000");
});