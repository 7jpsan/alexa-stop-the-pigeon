import { Request, Response } from 'express';
import { Owl, OwlHead, Servo } from '../models/owl';
import { ServoController } from '../servo-control/servo';

type MoveServoOptions = {
  position: number,
  move: number
}

class ServoImpl implements Servo{
  
  private servoController: ServoController;

  public constructor(public readonly pinPosition: number){
    console.log("New servo controller created", new Date().toString());
    this.servoController = new ServoController();
  }

  public async setPosition(pos: number): Promise<void>{
    await this.servoController.move({
      position: this.pinPosition,
      move: pos
    } as MoveServoOptions);
  }
}

export class OwlController{

    private owl: Owl;

    public constructor(){
      this.owl = new Owl({
        axis: {
          x: new ServoImpl(0),
          y: new ServoImpl(3)
        }
      } as OwlHead);
    }

    private getOwl(): Owl{
      return this.owl;
    }

    public resetPosition(req: Request, res: Response){
      this.owl.reset();
      res.json(this);
    }

    public left(req: Request, res: Response){
      this.owl.moveLeft();
      res.json(this);
    }

    public right(req: Request, res: Response){
      this.owl.moveRight();
      res.json(this);
    }

    public up(req: Request, res: Response){
      this.owl.moveUp();
      res.json(this);
    }

    public down(req: Request, res: Response){
      this.owl.moveDown();
      res.json(this);
    }
}