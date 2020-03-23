import { Request, Response } from 'express';
import { connection } from '../../../index';

export default (req: Request, res: Response) => {
    connection.query(`SELECT answer FROM questions WHERE UPPER (keyword) = "${req.params.id}"`, (error,result) => {
        if (error) throw error
        res.send(result)
    } ); 
};