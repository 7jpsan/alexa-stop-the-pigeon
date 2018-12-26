export type Position = {
  x: number,
  y: number
}

export interface Movable{
  set(position: Position): void;
  reset(): void;
}

export type Servo = {
   pinPosition: number,
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
  private readonly MOVE_STEP = 10;
  private readonly POS_MAX = 100;
  private readonly POS_INIT = 50;

  private position: Position = {
    x: this.POS_INIT,
    y: this.POS_INIT
  };

  public constructor(private owlHead: OwlHead){ 
  }

  public moveUp(){
    this.position.y = Math.min(this.position.y += this.MOVE_STEP, this.POS_MAX);
    this.move();
  }

  public moveDown(){
    this.position.y = Math.max(this.position.y -= this.MOVE_STEP, this.POS_MIN);
    this.move();
  }

  public moveRight(){
    this.position.x = Math.min(this.position.x += this.MOVE_STEP, this.POS_MAX);
    this.move();
  }

  public moveLeft(){
    this.position.x = Math.max(this.position.x -= this.MOVE_STEP, this.POS_MIN);
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
    this.position.x = this.POS_INIT;
    this.position.y = this.POS_INIT;
    this.set(this.position);
  }
}