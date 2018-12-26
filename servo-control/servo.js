const servo = +process.argv[2] || 0;
const deg = +process.argv[3] || 0;

const params = {
   maxDeg: () => 180,
   min: () => 600,
   max: () => 2600,
   range: () => params.max() - params.min(),
   step: () => params.range() / params.maxDeg()
};

let invalid = false;
if(servo < 0 || servo > 15){
   console.log("servo must be in range [0, 15]");
   invalid = true;
}
if(deg > 100 || deg < -2 ){
   console.log("deg must be in range [-1, 100]");
   invalid = true;
}
if(invalid){
   process.exit(-1);
}

const i2c = require('i2c-bus')
const i2cBus = i2c;
const Pca9685Driver = require("pca9685").Pca9685Driver;

process.on("SIGINT", () => {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
    pwm.dispse();
});

const options = {
    i2c: i2cBus.openSync(1),
    address: 0x40,
    frequency: 60,
    debug: true
};

pwm = new Pca9685Driver(options, function(err) {
    if (err) {
        console.error("Error initializing PCA9685");
        process.exit(-1);
    }
   
    if(deg < 0){
       pwm.channelOff(servo);
    }else{
       const wave = params.min() + ( params.range() * (deg/100)); 
       pwm.setPulseLength(servo, wave);
    }
});

