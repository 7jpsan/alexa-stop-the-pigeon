// /lib/routes/crmRoutes.ts
import {Request, Response, Application} from "express";
import { HeadController } from "../controllers/head-controler";

export class Routes {    
    
    public contactController: HeadController = new HeadController();

    public routes(app: Application): void {   
        
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Alive and working...'
            });
        })
        
        // Contact 
        app.route('/head/reset') 
        // POST endpoint
        .post(this.contactController.resetPosition)
    }
}