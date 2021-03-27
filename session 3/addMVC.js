bodyParser = require("body-parser");
express = require("express");

app = express();

//setup the views
app.set("view engine", "hbs");
app.set("views", "views");

//used to parse request body
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("add.hbs");
});

app.post("/", function(req, res) {
    body = req.body;
    a = parseInt(body.a);
    b = parseInt(body.b);
    c = a + b;
    res.render("addresult.hbs", {a, b, c});
})

app.listen(9000, function() {
    console.log("Listening on port 9000");
});