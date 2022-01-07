const five = require("johnny-five");
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
  var random = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 4).toUpperCase();
  const lcd = new five.LCD({
    controller: "PCF8574A"
  });
  lcd.useChar("heart");
  lcd.cursor(0, 0).print("hello :heart:");
  lcd.blink();
  lcd.cursor(1, 0).print("Blinking? ");
  lcd.cursor(0, 10).print(random);
  setTimeout(function() {
    process.exit(0);
  }, 3000);
});