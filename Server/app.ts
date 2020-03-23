import express, { Application } from 'express';
import bodyParser from 'body-parser';
import questionsRoutes from './src/Routes/questionsRoutes'
import cors from 'cors';

const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());
app.use(cors());

// questions routes
app.use('/questions',questionsRoutes)


export default app;