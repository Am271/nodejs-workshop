fs = require("fs"); //importing fs module to work on filesystems

try {
    data = fs.readFileSync("ssabc.txt", "utf-8");
} catch(err) {
    console.log("File isn't there!");
    data = ''
}

console.log(data);