var http = require('http');
var fs = require('fs');
var SerialPort = require("serialport");
var portName = process.argv[2];

const PORT = 8000;

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
	}
}

function css(request, response) {
  if (request.url === '/style.css') {
    response.writeHead(200, {'Content-type' : 'text/css'});
    var fileContents = fs.readFileSync('./css/style.css', {encoding: 'utf8'});
    response.write(fileContents);
  }
}  

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
    }).listen(PORT);
});
