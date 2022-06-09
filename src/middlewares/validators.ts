import express, { Express, NextFunction, Request, Response } from 'express';
const createHttpError = require('http-errors')
//* Include joi to check error type 
const Joi = require('joi')
//* Include all validators
const Validators = require('../validators')


const validateFunction = function(validator: string) {
    //! If validator is not exist, throw err
    if(!Validators.hasOwnProperty(validator))
        throw new Error(`'${validator}' validator is not exist`)

    return async function(req: Request, res: Response, next :NextFunction) {
        try {
            const validated = await Validators[validator].validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            console.log(err)
            //* Pass err to next
            //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
            if(err) 
                return next(createHttpError(422, {message: err}))
            next(createHttpError(500))
        }
    }
}

export { validateFunction };