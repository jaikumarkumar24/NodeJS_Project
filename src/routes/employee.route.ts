import express, { Express, Request, Response } from 'express';
import  { employeeAll,employeeView,employeeInsert,employeeUpdate,employeeDelete } from '../controllers';
import { validateFunction } from '../middlewares/validators';

const router = express.Router();

router.get('/employee', employeeAll);
router.post('/employee/add',validateFunction('employeeValidatorSchema'), employeeInsert);
router.put('/employee/update', employeeUpdate);
router.delete('/employee/delete', employeeDelete);

export { router as employeeRouter };