import { NextFunction, Request, Response } from "express";
import { Organization } from "../models";
import mongoose from "mongoose";

export const getOrganizations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const organizations = await Organization.find()
        res.status(200).json({
            message: "Organizations retrieved successfully",
            error: false,
            data: organizations
        })
        return;
    } catch (error) {
        next(error)
    }
};

export const getOrganization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ 
                message: "Organization not found",
                error: true,
                data: undefined 
            })
            return;
        }
        const organization = await Organization.findById(id)      
        res.status(200).json({
            message: "Organization retrieved successfully",
            error: false,
            data: organization
        })
        return;
    } catch (error) {
        next(error)
    }
};