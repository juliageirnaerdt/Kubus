var slides = [];
getJSON('http://localhost/Kubus/data/videodata.json',
	function(err, data) {
		if (err !== null) {
			alert('Something went wrong: ' + err);
		}
		slides = data;
	});

var counter = 0;

function nextSlide(){
	if (counter >= slides.length-1){
		counter = 0;
	}
	console.log(slides[counter]);
	counter++;
}


var http = require('http');
var SerialPort = require("serialport");
var portName = process.argv[2];

var myPort = new SerialPort(portName, {
	baudRate: 9600
})

myPort.on('open',onOpen);
myPort.on('data',onData);

function onOpen(){
	console.log("Open connection");
}

function onData(data){
	if (data != "") {
		console.log("Data="+data);	
		nextSlide();	
	}
}

function onRequest (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello World');
	response.end();
}

http.createServer(onRequest).listen(8000);