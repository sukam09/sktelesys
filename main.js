var io = require('socket.io');
var fs = require('fs');

var SerialPort = require('serialport');
	portName = 'COM5',
	sp = new SerialPort(portName);

var moment=require('moment');



sp.on('open', function(){
	sp.on('data', function(data){
		var temperature=data[0]*5.0/1024.0/0.01;

		console.log("Temperature: ", Math.floor(temperature*10)/10, "˚C");
		fs.appendFile('file01_async.txt',temperature+'\n','utf-8', function(e){
	//     fs.writeFile('file01_async.txt',temperature+'\n','utf-8', function(e){
			if(e) console.log(e);
			else console.log('Write Finish!');
		});


	try{
//		fs.writeFileSync('file02_sync.txt',temperature+'\n','utf-8');
		fs.appendFileSync('file02_sync.txt',temperature+'\n','utf-8');
		console.log('Write Fininshed!');
	}catch(e){
		console.log(e);
	}
	});
})
