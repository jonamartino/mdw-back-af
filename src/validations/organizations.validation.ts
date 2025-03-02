import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const createOrganizationValidationSchema = Joi.object({
    name: Joi.string().min(3).max(250).required(),
    description: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    website: Joi.string().optional(),
    logo: Joi.string().optional(),
    isVerified: Joi.boolean().optional().default(false),
});
export const createOrganizationValidation = (req: Request, res: Response, next: NextFunction) => {
    const {error} = createOrganizationValidationSchema.validate(req.body)
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}
const updateOrganizationValidationSchema = Joi.object({
    name: Joi.string().min(3).max(250).optional(),
    description: Joi.string().optional(),
    email: Joi.string().email().optional(),
    phone: Joi.string().optional(),
    address: Joi.string().optional(),
    website: Joi.string().optional(),
    logo: Joi.string().optional(),
    isVerified: Joi.boolean().optional(),
});
const organizationParamValidationSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
});
export const updateOrganizationValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error: bodyError } = updateOrganizationValidationSchema.validate(req.body);
    const {error: paramError } = organizationParamValidationSchema.validate(req.params);  
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
export const deleteOrganizationValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error} = organizationParamValidationSchema.validate(req.params);    
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}

