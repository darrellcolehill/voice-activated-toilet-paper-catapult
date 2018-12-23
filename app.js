console.log("server is runnning");

var fs = require('fs');
var express = require('express');
var app = express();
var spawn = require('child_process').spawn


var port = 3000;


app.get("/", function(req, res) {
	res.send("Node Server For alexapoophelper");
});

app.listen(port);


app.use('/skillInvoked', function skillInvoked(){
	console.log("The user has invoked the alexapoophelper skill");
	//add code that triggers the python code to run when the skill has been invoked
});

app.use('/launchTP', function skillInvoked(){
	console.log("The user has invoked the alexapoophelper skill");
	//add code that triggers the python code to run when the skill has been invoked
	py = spawn('python', ['pySerialTest.py']);
	py.stdout.on('end', function(){
		console.log("serial data has been received");
	})
});
