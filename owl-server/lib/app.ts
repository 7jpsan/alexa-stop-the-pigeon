// lib/app.ts
import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import * as cors from "cors";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();  
  
    constructor() {
        this.app = express();
        this.config();      
        this.routePrv.routes(this.app); 
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors.default());
    }

}

export default new App().app;