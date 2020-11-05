import express from "express";
import bodyParser from "body-parser";
import { Routes } from "./routes";
import mongoose from 'mongoose';

class App {
    public app: express.Application;
    public route: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config(); 
        this.route.routes(this.app); 
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.connect('mongodb://localhost:27017/school', {})
        .then(() => console.log('connection successful'))
        .catch((err) => console.error(err));
    }

}

export default new App().app;