void setup(){
  Serial.begin(9600);
}

void loop(){
  int sensorVal=analogRead(0);
  Serial.write(sensorVal);

  //데이터 측정 주기. 나중에 1분으로 바꿀 예정.
  delay(1000);
}
