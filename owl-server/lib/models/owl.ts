export type Position = {
  x: number,
  y: number
}

export interface Movable{
  set(position: Position): void;
  reset(): void;
}

export interface Servo {
   pinPosition: number;
   setPosition: (pos: number) => void;
}

export type OwlHead = {
  axis: {
    x: Servo,
    y: Servo
  }
}

export class Owl implements Movable{

  private readonly POS_MIN = 0;
  private readonly MOVE_STEP = 1;
  private readonly POS_MAX = 100;
  private readonly POS_INIT_X = 50;
  private readonly POS_INIT_Y = 20;

  // Read from config/dynamo/s3
  private readonly MIN_MAX = {
    x: {min: 0, max: 100, init: 50, current: 50},
    y: {min: 1, max: 44, init: 20, current: 20}
  }
  
  private position: Position = {
    x: this.POS_INIT_X,
    y: this.POS_INIT_Y
  };

  public constructor(private owlHead: OwlHead){ 
  }

  public moveUp(){
    this.position.y = Math.max(this.position.y -= this.MOVE_STEP, this.MIN_MAX.y.min);
    this.move();
  }
  
  public moveDown(){
    this.position.y = Math.min(this.position.y += this.MOVE_STEP, this.MIN_MAX.y.max);
    this.move();
  }

  public moveRight(){
    this.position.x = Math.max(this.position.x -= this.MOVE_STEP, this.MIN_MAX.x.min);
    this.move();
  }
  
  public moveLeft(){
    this.position.x = Math.min(this.position.x += this.MOVE_STEP, this.MIN_MAX.x.max);
    this.move();
  }
  
  private move(): void {
    this.set(this.position);
  }
  
  public set(position: Position): void {
    this.owlHead.axis.x.setPosition(position.x);
    this.owlHead.axis.y.setPosition(position.y);
  }

  public reset(): void {
    this.position.x = this.MIN_MAX.x.init;
    this.position.y = this.MIN_MAX.y.init;
    this.set(this.position);
  }
}