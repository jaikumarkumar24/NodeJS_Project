import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT;

//Db connection
import db from './libs/dbConnect';
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

import { employeeRouter } from './routes';
app.use(employeeRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});