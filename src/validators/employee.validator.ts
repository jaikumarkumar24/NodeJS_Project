import Joi from 'joi';

const employeeValidatorSchema = Joi.object({
    name:Joi.string().required(),
    empcode:Joi.string().required(),
    designation:Joi.string().required(),
    mobile:Joi.number().required(),
    status:Joi.string().required(),
});

export { employeeValidatorSchema } ;