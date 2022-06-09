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
        return error;
    }    
}

export const employeeView = async (req: Request, res: Response) => {    
    try {
        return employeeService.employeeAllView();
    } catch (error) {
        return error;
    }
}

export const employeeUpdate = async (req: Request, res: Response) => {    
    try {
        return employeeService.employeeInsert(req.body);
    } catch (error) {
        return error;
    }    
}

export const employeeDelete = async (req: Request, res: Response) => {    
    try {
        return employeeService.employeeInsert(req.body);
    } catch (error) {
        return error;
    }    
}