import express, { Router } from 'express';
import getAnswer from '../Controllers/questions/getQuestion';


const router : Router = express.Router();

//get answer
router.get('/find/:id', getAnswer);

export default router;