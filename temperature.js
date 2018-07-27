var SerialPort=require('serialport');
	portName='COM1',
	sp=new SerialPort(portName),
	sensorVal=0;

sp.on('open', function(){
	//console.log('Serial Port OPEN');
	sp.on('data', function(data){
		var temperature=data[0]*5.0/1024.0/0.01;
		console.log("Temperature: ", Math.floor(temperature*10)/10, "˚C");
	});
});

