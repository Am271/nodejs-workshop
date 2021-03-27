http = require("http");

http.createServer(function(req, res) { //createServer is a method that takes a function as a parameter
    //req and res are request and response respectively
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello world</h1>");
    res.end();
})
.listen(9000, function() {
    console.log("Listening on port 9000");
});