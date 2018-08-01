var fs=require('fs');

var SerialPort = require('serialport');
	portName = 'COM5',
	sp = new SerialPort(portName);

var moment=require('moment');

sp.on('open', function(){
	sp.on('data', function(data){
		var date=moment().format('YYYY-MM-DD HH:mm:ss');
		var temperature=data[0]*5.0/1024.0/0.01;

		console.log(date+' '+Math.floor(temperature*10)/10+'˚C');
		fs.appendFile('file01_async.txt', date+' '+Math.floor(temperature*10)/10+'˚C'+'\n','utf-8', function(e){
			if(e) console.log(e);
			else console.log('Write Finish!');
		});
		fs.writeFile('file01_async_RealTime.txt',date+' '+Math.floor(temperature*10)/10+'˚C'+'\n','utf-8', function(e){

			if(e) console.log(e);
			else console.log('Temperature is recording');
		});

		try{
			fs.writeFileSync('file02_sync_RealTime.txt',date+' '+Math.floor(temperature*10)/10+'˚C'+'\n','utf-8');
			fs.appendFileSync('file02_sync.txt', date+' '+Math.floor(temperature*10)/10+'˚C'+'\n','utf-8');
			console.log('Write Fininshed!');
		}
		catch(e){
			console.log(e);
		}
	});
});
