var SerialPort=require('serialport'),
	portName='/dev/ttyUSB0',
	sp=new SerialPort(portName),
	sensorVal=0;

sp.on('open', function(){
	console.log('Serial Port OPEN');
	sp.on('data', function(data){
		console.log("Temperature: ", data[0]);
	});
});