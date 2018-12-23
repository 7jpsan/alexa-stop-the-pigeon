import { Request, Response } from 'express';

export class HeadController{

    public resetPosition(req: Request, res: Response){
      res.json({property: 'Nothing to get here'});
    }
}