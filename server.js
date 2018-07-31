var http = require('http');
var SerialPort=require('serialport');
	portName='COM5',
	sp=new SerialPort(portName);
var moment=require('moment'); 

sp.on('open', function(){
	sp.on('data', function(data){
		var date=moment().format('YYYY-MM-DD HH:mm:ss');
		var temperature=data[0]*5.0/1024.0/0.01;
		console.log(date, Math.floor(temperature*10)/10);
	});
});

console.log('Fin.');

function onRequest(request, response) {  
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    //response.write(temperature);
    response.end();
}

http.createServer(onRequest).listen(8888);