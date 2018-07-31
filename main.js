var io = require('socket.io');
var fs = require('fs');

var SerialPort=require('serialport');
	portName='COM5',
	sp=new SerialPort(portName);

var moment=require('moment');



sp.on('open', function(){
	sp.on('data', function(data){
		var temperature=data[0]*5.0/1024.0/0.01;
		console.log()
		console.log("Temperature: ", Math.floor(temperature*10)/10, "˚C");
		fs.writeFile('file01_async.txt',temperature,'utf-8',function(e){
			if(e) console.log(e);
			else console.log('Write Finish!');
		});


	try{
		fs.writeFileSync('file02_sync.txt',temperature,'utf-8');
		console.log('Write Fininshed!');
	}catch(e){
		console.log(e);
	}
	});
})
