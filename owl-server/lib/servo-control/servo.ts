
import { Pca9685Driver, Pca9685Options } from "pca9685";
//const Pca9685Driver = require("pca9685").Pca9685Driver;

function validateParams(options: any) {
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

export async function moveServo(params: any): Promise<Pca9685Driver> {

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
   return await initI2C(options);
}

function powerDown(params: any){
  params.pwm.channelOff(params.position);
}
   

async function initI2C(options: any) {

   const i2c = require('i2c-bus')
   const i2cBus = i2c;
   const Pca9685Driver = require("pca9685").Pca9685Driver;

   const i2cOptions: Pca9685Options = {
      i2c: i2cBus.openSync(1),
      address: 0x40,
      frequency: 60,
      debug: options.debug
   };

   return new Promise((resolve: (param: Pca9685Driver) => void, reject) => {
      const pwm = new Pca9685Driver(i2cOptions, function (err: Error) {
         if (err) {
            console.error("Error initializing PCA9685");
            reject(err);
         }
         if (options.move < 0) {
            pwm.channelOff(options.position);
         } else {
            const wave = options.min + (options.range() * (options.move / 100));
            pwm.setPulseLength(options.position, wave);
         }
   
         if(options.standalone){
            setTimeout(powerDown.bind(null, {pwm: pwm, position: options.position}), 800);
         }
         resolve(pwm);
      });
   });
}

export class ServoController {
   
   private readonly TIMEOUT = 4000;
   private timestampLastCommand = 0;

   public constructor(){}

   // TODO have a type for it... 
   public async move(params: any): Promise<void>{
      try{
         this.timestampLastCommand = Date.now();
         const pwm = await moveServo(params);
         setTimeout(() => {
            this.powerDown(pwm, params.position);
         }, this.TIMEOUT+1000);
      }catch(err){
         console.log("Check logs for possible causes...");
         console.error(err);
      }
   }

   private powerDown(pwm: Pca9685Driver, position: number): void{
      const checkPowerDown = Date.now();
      if(checkPowerDown - this.timestampLastCommand > this.TIMEOUT){
         powerDown({pwm, position})
      }
   }
}