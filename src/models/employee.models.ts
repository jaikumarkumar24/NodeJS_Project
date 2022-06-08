import { Schema, model } from 'mongoose';
import { employeeInterface } from '../interface/employee.interface';


const employeeSchema = new Schema({
    name:String,
    empcode:String,
    designation:String,
    mobile:Number,
    status:String
})


export const employeeModel = model<employeeInterface>('EMPLOYEESCHEMA', employeeSchema, 'employee');