void GUISMS(String sdt, String sms){
  String SMS = "AT+CMGS=";
  SMS += '"';
  SMS += sdt;
  SMS += '"';
  SIM.println(SMS);
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  SIM.println(sms); 
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  SIM.write(0x1a);
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  Serial.println("Da xong");
  }
void startSIM(){
 // delay(1000);
  Serial.println("khởi động SIM");
  SIM.println("AT");
  int khoidong = 0;
  while(khoidong==0){
    if(SIM.available()){
      if(SIM.find("SMS Ready")){
        khoidong=1;
        Serial.println("khởi động xong");
        }
      }
    } 
  }
void initSIM(){
  Serial.println("Cấu hình SIM");
  SIM.println("AT+CLIP=1");
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  SIM.println("AT+CMGF=1");
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  SIM.println("AT+CNMI=2,2");
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  String Xoatn = "AT+CMGDA=";
  Xoatn += '"';
  Xoatn += "DEL ALL";
  Xoatn += '"';
  SIM.println(Xoatn);
  delay(10);
  while (SIM.available()) {
    Serial.println(SIM.readString());
  }
  Serial.println("Cấu hình xong");
  }
