var SerialPort=require('serialport');
	portName='COM1',
	sp=new SerialPort(portName);

var moment=require('moment');

sp.on('open', function(){
	sp.on('data', function(data){
		var temperature=data[0]*5.0/1024.0/0.01;
		var date=moment().format("YYYY-MM-DD HH:mm:ss");
		console.log(date, Math.floor(temperature*10)/10);
	});
});