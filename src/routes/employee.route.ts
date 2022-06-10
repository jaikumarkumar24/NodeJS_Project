import express, { Express, Request, Response } from 'express';
import  { employeeAll,employeeById,employeeInsert,employeeUpdate,employeeDelete } from '../controllers';
import { validateFunction } from '../middlewares/validators';

const router = express.Router();

router.get('/employee', employeeAll);
router.get('/employee/:id', employeeById);
router.post('/employee/add',validateFunction('employeeValidatorSchema'), employeeInsert);
router.put('/employee/update/:id', employeeUpdate);
router.delete('/employee/delete/:id', employeeDelete);

export { router as employeeRouter };