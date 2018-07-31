void setup(){
  Serial.begin(9600);
}

void loop(){
  int sensorVal=analogRead(0);
  Serial.write(sensorVal);
  
  delay(1000);
}
