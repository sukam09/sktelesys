var moment=require('moment');
var io=require('socket.io').listen(8000);

var SerialPort=require('serialport');
	portName='COM5',
	sp=new SerialPort(portName);

sp.on('open', function(){
	sp.on('data', function(data){
		var date=moment().format('YYYY-MM-DD HH:mm:ss');
		var temperature=data[0]*5.0/1024.0/0.01;
		console.log(date, Math.floor(temperature*10)/10);
	});
});