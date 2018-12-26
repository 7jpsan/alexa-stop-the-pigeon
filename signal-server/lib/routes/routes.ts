// /lib/routes/crmRoutes.ts
import {Request, Response, Application} from "express";
import { OwlController } from "../controllers/owl-controler";

export class Routes {    
    
    public contactController: OwlController = new OwlController();

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
        .post((req: Request, res: Response) => this.contactController.resetPosition(req, res));
    }
}