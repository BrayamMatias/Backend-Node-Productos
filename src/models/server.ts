import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesProducto from "../routes/producto";
import db from '../db/connection';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnection()
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`);
        });
    }

    routes(){
        this.app.get('/',(req: Request, res: Response) =>{
            res.json({
                message: 'API Working!'
            });
        })
        this.app.use('/api/productos', routesProducto);
    }

    middlewares(){
        //Parseamos el body
        this.app.use(express.json());

        //CORS
        this.app.use(cors());
    }

    async dbConnection(){
        try {
            await db.authenticate();
        console.log('Database online');
        } catch (error) {
            console.log(error);
            console.log('Error connecting to the database');
        }
        
    }

}

export default Server;