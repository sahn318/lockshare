var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

var locked = 1;
var lock_access = 1;


app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
	response.send("lockshare");
});

app.get('/:a?', function(request, response){
	if(request.params.a == "lock"){
		locked = true;
	}else if(request.params.a == "unlock"){
		locked = false;
	}else if(request.params.a == "lockIDstatus"){
		if(lock_access == 1){
			response.send("shawn");
		}else{
			response.send("shawn vinu");
		}
	}else if(request.params.a == "give"){
		lock_access = 2;
	}else if(request.params.a == "revoke"){
		lock_access = 1;
	}else if(request.params.a == "java"){
		if(locked){
			response.send("1");
		}else{
			response.send("2");
		}
	}
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

/*
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/