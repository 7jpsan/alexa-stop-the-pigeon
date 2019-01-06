function validateParams(options) {
   let invalid = false;
   if (options.position < 0 || options.position > 15) {
      console.log("position must be in range [0, 15]");
      invalid = true;
   }
   if (options.move > 100 || options.move < -2) {
      console.log("deg must be in range [-1, 100]");
      invalid = true;
   }
   if (invalid) {
      process.exit(-1);
   }
}

function moveServo(params) {

   const options = {
      debug: params.debug || false,
      position: params.position,
      maxDeg: params.maxDeg || 180,
      min: params.min || 600,
      max: params.max || 2600,
      range: () => options.max - options.min,
      step: () => options.range() / options.maxDeg,
      move: params.move
   };
   validateParams(options);
   initI2C(options);
}

function powerDown(params){
  params.pwm.channelOff(params.position);
}
   

function initI2C(options) {

   const i2c = require('i2c-bus')
   const i2cBus = i2c;
   const Pca9685Driver = require("pca9685").Pca9685Driver;

   const i2cOptions = {
      i2c: i2cBus.openSync(1),
      address: 0x40,
      frequency: 60,
      debug: options.debug
   };

   pwm = new Pca9685Driver(i2cOptions, function (err) {
      if (err) {
         console.error("Error initializing PCA9685");
         process.exit(-1);
      }
      if (options.move < 0) {
         pwm.channelOff(options.position);
      } else {
         const wave = options.min + (options.range() * (options.move / 100));
         pwm.setPulseLength(options.position, wave);
      }
      setTimeout(powerDown.bind(null, {pwm: pwm, position: options.position}), 800);
   });
}


module.exports = {
   moveServo
}