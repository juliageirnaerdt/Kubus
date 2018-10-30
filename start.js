const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path');
const SerialPort = require('serialport');
const portName = process.argv[2];
const port = 8000;

var myPort = new SerialPort(portName, {
	baudRate: 9600
})

myPort.on('open',onOpen);
myPort.on('data',onData);

function onOpen(){
	console.log("Open connection");
}

function onData(data){
		// console.log(JSON.stringify(data));
if (data != "") {
	if (data == "1") {
		io.emit('nextslide', 'Go to next slide');
			console.log("AAN");
		}
		else if (data == "0") {
			console.log("UIT");
		}
	}
}

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
  //__dirname : It will resolve to your project folder.
});

io.on('connection', function (socket) {
	socket.emit('socketconnection', { Connection: 'Successful' });
	  socket.on('greetserver', function (data) {
	   console.log(data);
	});
});

// console.log(typeof roulette.videoslidenext);
server.listen(port);

console.log("Running at Port 8000");