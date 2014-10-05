var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

server.listen(port, ip_address, function () {
  console.log( "Listening on " + ip_address + ", port " + port )
});

var http = require("http");

/* data variables */


/* http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("asdasd");
	response.end();
}).listen(8888); */

function onRequest(request, response){
	console.log("received");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("wqqwtqt");
	response.end();
}

http.createServer(onRequest).listen(80);

console.log ("started");