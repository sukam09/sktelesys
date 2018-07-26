#include <DHT.h>
#include <SPI.h>
#include <Ethernet.h>
//#include <DS1302.h>

/*#define CLK 13
#define DAT 12
#define RST 11*/

//DHT dht(0, DHT22);
//DS1302 rtc(RST, DAT, CLK);

//Web Server
byte mac[]={0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
EthernetServer server(80);

void setup(){
  Serial.begin(9600);
  //dht.begin();
  /*rtc.halt(false);
  rtc.writeProtect(false);
  rtc.setDOW(THURSDAY);
  rtc.setTime(9, 21, 17);
  rtc.setDate(26, 7, 2018);*/
  while(!Serial){
    
  }
  /*//이더넷 포트를 열고 서버를 시작합니다.
  Ethernet.begin(mac);
  server.begin();
  Serial.print("server is at ");
  //공유기로부터 할당받은 IP를 시리얼 통신으로 알려줍니다.
  Serial.println(Ethernet.localIP());*/
}

void loop(){
  /*float temperature=dht.readTemperature();
  float humidity=dht.readHumidity();*/

  //임시
  int sensorVal=analogRead(0);
  float voltage=sensorVal*5.0/1024.0;
  float temperature=voltage/0.01;
  float humidity=0;

  //for debugging
  /*Serial.print("Date: ");
  Serial.print(rtc.getDateStr());
  Serial.print(" ");
  Serial.print(rtc.getDOWStr());
  Serial.print(" ");
  Serial.print("Time: ");
  Serial.print(rtc.getTimeStr());
  Serial.print(" ");*/
  
  Serial.println(temperature);
  Serial.println(humidity);

  /*//클라이언트가 접속할 때까지 대기합니다.
  EthernetClient client=server.available();
  if(client){
    Serial.println("new client");
    boolean currentLineIsBlank=true;
    while(client.connected()){
      if(client.available()){
        char c=client.read();
        Serial.write(c);
        //클라이언트로 받는 문자를 반복 출력합니다.
        //새줄문자 \n이 들어오고 그 라인이 비어있다면
        //http 요청이 끝난 것이므로 응답을 보냅니다.
        if(c=='\n'&&currentLineIsBlank){
          //표준 http 응답을 보냅니다.
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close"); //the connection will be closed after completion of the response
          client.println("Refresh: 5"); //refresh the page automatically every 5 sec
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");
          
          //아날로그 핀 값을 읽어서 보내줍니다.(임시)
          client.print("Temperature: ");
          client.print(temperature);
          client.print("˚C");
          client.println("<br />");
          
          client.println("</html>");
          break;
        }
        if(c=='\n'){
          //새 줄이 시작되었을 때
          currentLineIsBlank=true;
        }
        else if(c!='\r'){
          //현재 줄에 문자가 있을 때
          currentLineIsBlank=false;
        }
      }
    }
  //브라우저가 데이터를 수신받을 시간을 줍니다.
  delay(1);
  //연결을 끊습니다.
  client.stop();
  Serial.println("client disconnected");
  }*/

  //임시. 나중에 1분으로 바꿀 예정.
  delay(1000);
}
