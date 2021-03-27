express = require("express");

app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello world</h1>");
});

app.listen(9000, function() {
    console.log("Listening on port 9000");
})