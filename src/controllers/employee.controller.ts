import express, { Express, Request, Response } from 'express';
import { employeeService } from '../services/index';


export const employeeAll = async (req: Request, res: Response) => {    
    try {
        const output = await employeeService.employeeAllView();
        return res.status(200).send(output)
    } catch (error) {
        res.status(500).json({message: error});
    }
}

export const employeeInsert = async  (req: Request, res: Response) => {  
    try {
        const output = await employeeService.employeeInsert(req.body);
        return res.status(200).send(output)
    } catch (error) {
        res.status(500).json({message: error});
    }    
}

export const employeeById = async (req: Request, res: Response) => {    
    try {
        const empId = req.params.id;
        const output = await employeeService.employeeView(empId);
        return res.status(200).send(output);

    } catch (error) {
        res.status(500).json({message: error});
    }
}

export const employeeUpdate = async (req: Request, res: Response) => {    
    try {
        const empId = req.params.id;
        const empdata = req.body;
        const output = await employeeService.employeeUpdate(empId,empdata);
        return res.status(200).send(output);
    } catch (error) {
        res.status(500).json({message: error});
    }    
}

export const employeeDelete = async (req: Request, res: Response) => {    
    try {
        const empId = req.params.id;
        const output = await employeeService.employeeDelete(empId);
        return res.status(200).send(output);
    } catch (error) {
        return error;
    }    
}