const five = require("johnny-five");
const moment = require('moment')
const Raspi = require("raspi-io").RaspiIO;
const board = new five.Board({
  //repl: false,
  //debug: false,
  io: new Raspi()  
});

/**
* Connect peripherals and initialize
*/
board.on("ready", function() {  
  const lcd = new five.LCD({
    controller: "PCF8574A"
  });

  function displaytime () {
    lcd.cursor(1, 0).print(moment().format('YYYY-MM-DD dddd'));
    lcd.cursor(2, 0).print(moment().format('hh:mm:ss a'));
  }

  lcd.home().clear();  
  this.wait(1000, function(){    
    lcd.cursor(0, 0).print("--- Date & Time ----");
    lcd.cursor(3, 0).print("--------------------");
    setInterval(displaytime, 1000);
  });
  
});