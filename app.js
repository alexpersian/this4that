/**
 * Created by stevehenningsgard on 3/16/15.
 */

var http = require("http");

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("FUCK YESH");

});

server.listen(8000);

console.log("FUDGE");