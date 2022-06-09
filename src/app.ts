import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
//Db connection
import db from './libs/dbConnect';
import { employeeRouter } from './routes';

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT;


db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));


app.use(employeeRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server work');
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});