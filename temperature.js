var SerialPort=require('serialport');
	portName='COM1',
	sp=new SerialPort(portName),
	sensorVal=0;

sp.on('open', function(){
	//console.log('Serial Port OPEN');
	sp.on('data', function(data){
		console.log("Temperature: ", data[0]*5.0/1024.0/0.01, "˚C");
	});
});

