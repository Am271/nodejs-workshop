http = require("http");
date = new Date();

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-type":"text/html"});
    month = date.getMonth() + 1;
    opDate = date.getDate() + '/' + month + '/' + date.getFullYear();
    res.write("<h3>" + opDate + "</h3>");
    res.end();
    process.exit(1); //exits the program after first response has been sent
}).listen(9000, function() {
    console.log("Listening on port 9000");
});