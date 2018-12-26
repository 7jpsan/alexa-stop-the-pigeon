import { Request, Response } from 'express';

import { Owl, OwlHead } from '../models/owl';

export class HeadController{

    private owl = new Owl({} as OwlHead);

    public resetPosition(req: Request, res: Response){
      res.json({property: 'Nothing to get here'});
    }
}