//https://www.eclipse.org/paho/clients/js/
/*
function LED1_On() {
	
	console.log("led on");
	message = new Paho.MQTT.Message("LED_ON");
    message.destinationName = "stevandres123@gmail.com/test1";
    client.send(message);
	document.getElementById("estado").innerHTML="LED encendido";
  
}
function LED1_Off(){	
	
	console.log("led off");
	message = new Paho.MQTT.Message("LED_Off");
    message.destinationName = "stevandres123@gmail.com/test1";
    client.send(message);
	document.getElementById("estado").innerHTML="LED apagado";
}
*/

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  https://www.telecomunicaciones.gob.ec/wp-content/uploads/2016/08/Plan-de-Telecomunicaciones-y-TI..pdf
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "stevandres123@gmail.com",
    password: "esoestodo1994",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	client.subscribe("stevandres123@gmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "stevandres123@gmail.com/test1";
    client.send(message);
	
  }
 
  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	document.getElementById("temp").innerHTML=message.payloadString.split("=")[2]
	document.getElementById("hum").innerHTML=message.payloadString.split("=")[1]
	document.getElementById("his").innerHTML=message.payloadString.split("=")[3]
	
}
   