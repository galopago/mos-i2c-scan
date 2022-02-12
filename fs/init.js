load('api_timer.js');
load('api_config.js');
load('api_mqtt.js');
load('api_gpio.js');
load('api_esp32.js');
load('api_rpc.js');
load('api_sys.js');
load('api_adc.js');
load('api_net.js');
load('api_file.js');
load('api_i2c.js');



// Call every 10 second
Timer.set(10000, Timer.REPEAT, function() {
  let value = GPIO.toggle(2);
  print(value ? 'Tick' : 'Tock');
}, null);
