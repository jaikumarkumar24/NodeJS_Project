import express, { Express, Request, Response } from 'express';

import { employee } from '../controllers';

const router = express.Router();

router.get('/employee', (req: Request, res: Response) => {
    try {
        return employee.employeeAll();
    } catch (error) {
        return error;
    }
});
 
router.post('/employee/add', (req: Request, res: Response) => {
    //console.log(req.body);
    try {
        return employee.employeeInsert(req.body);
    } catch (error) {
        return error;
    }
    
});

router.put('/employee/update', (req: Request, res: Response) => {
    try {
        return employee.employeeInsert(req.body);
    } catch (error) {
        return error;
    }
});

router.delete('/employee/delete', (req: Request, res: Response) => {
    try {
        return employee.employeeInsert(req.body);
    } catch (error) {
        return error;
    }
});

export { router as employeeRouter };