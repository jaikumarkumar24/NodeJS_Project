import express, { Express, Request, Response } from 'express';
import { employeeRouter } from '../routes';

const app: Express = express();

app.use(employeeRouter);