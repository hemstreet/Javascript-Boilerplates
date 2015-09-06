#include <Bridge.h>
#include <YunServer.h>
#include <YunClient.h>

YunServer server;

void setup() {
  // Setup pin for output
  pinMode(7, OUTPUT);
  Bridge.begin();
  server.listenOnLocalhost();
  server.begin();
}

void loop() {

  YunClient client = server.accept();

  if (client) {
    process(client);
    client.stop();
  }

  delay(15);

}

void process(YunClient client) {
  String command = client.readStringUntil('/');

  // Check if the url contains the word "togglePin"
  if (command == "togglePin") {
    togglePin(client);
  }

}

void togglePin(YunClient client) {

  int pin, value;

  pin = client.parseInt();

  // Check if the url string contains a value (/togglePin/7/VALUE)
  if (client.read() == '/') {
    value = client.parseInt();
 
    // Lets toggle the pin!
    if(value == 1 ) {
      digitalWrite(pin, HIGH); // Turn the pin on
    }
    else
    {
      digitalWrite(pin, LOW);   // Turn the pin off 
    }
  }
}

