import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const createActivityValidationSchema = Joi.object({
    title: Joi.string().min(3).max(250).required(),
    description: Joi.string().max(500).required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    duration: Joi.number().required(),
    price: Joi.number().required(),
    capacity: Joi.number().required(),
    category: Joi.string().required(),
    organization: Joi.string().hex().length(24).required(),
    isFull: Joi.boolean().optional(),
    isActive: Joi.boolean().optional()
});

export const createActivityValidation = (req: Request, res: Response, next: NextFunction) => {
    const {error} = createActivityValidationSchema.validate(req.body)
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}
const activityParamValidationSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
});
export const getActivityValidation = (req: Request, res: Response, next: NextFunction) => {
    const {error} = activityParamValidationSchema.validate(req.params);    
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}
export const updateActivityValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error: bodyError } = createActivityValidationSchema.validate(req.body);
    const {error: paramError } = activityParamValidationSchema.validate(req.params);  
    if (paramError) {
        res.status(400).json({
            message: paramError.details[0].message,
            error: true,
        })
        return;
    }
    if (bodyError) {
        res.status(400).json({
            message: bodyError.details[0].message,
            error: true,
        })
        return;
    }
    next();
}
export const deleteActivityValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error} = activityParamValidationSchema.validate(req.params);    
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}

