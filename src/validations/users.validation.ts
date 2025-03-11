import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const createUserValidationSchema = Joi.object({
  name: Joi.string().min(3).max(250).required(),
  lastname: Joi.string().required(),
  birthday: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean().optional().default(false),
  role: Joi.string().valid("user", "organization").optional().default("user"),
  firebaseUid: Joi.string().optional(),
  organization: Joi.string().hex().length(24).optional().allow(null),
});

export const createUserValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = createUserValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      message: error.details[0].message,
      error: true,
    });
    return;
  }
  next();
};
export const updateUserValidationSchema = Joi.object({
    name: Joi.string().min(3).max(250).optional(),
    lastname: Joi.string().optional(),
    birthday: Joi.date().optional(),
    email: Joi.string().email().optional(),
    isAdmin: Joi.boolean().optional(),
    role: Joi.string().valid("user", "organization").optional().default("user"),
    organization: Joi.string().hex().length(24).optional().allow(null),
});
const userParamValidationSchema = Joi.object({
    id: Joi.string().hex().length(24).required()
});
export const updateUserValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error: bodyError } = updateUserValidationSchema.validate(req.body);
    const {error: paramError } = userParamValidationSchema.validate(req.params);  
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
export const deleteUserValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error} = userParamValidationSchema.validate(req.params);    
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}
export const getUserValidation = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const {error} = userParamValidationSchema.validate(req.params);    
    if (error) {
        res.status(400).json({
            message: error.details[0].message,
            error: true,
        })
        return;
    }
    next();
}
