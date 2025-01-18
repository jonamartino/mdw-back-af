import { NextFunction, Request, Response } from "express";
import { User } from "../models";

interface UserBody {
    name: string;
    lastname: string;
    birthday: Date;
    email: string;
    isAdmin?: boolean;
}

export const createUser = async (
    req: Request<null, null, UserBody>,
    res: Response,
    next: NextFunction
) => {
    const formattedDate = new Date(req.body.birthday);   
    try {
        const newUser = await User.create({
            ...req.body,
            birthday: formattedDate,
        });
        res.status(201).json({ 
            message: "User created successfully", 
            data: newUser,
            error: false
        })
        return;
    } catch (error) {
        next(error);        
    }
};

export const getUsers = (req: Request, res: Response) => {
    res.json({ message: "", data: {} });
};

export const getUser = (req: Request, res: Response) => {
    res.json({ message: "", data: {} });
};

export const updateUser = (req: Request, res: Response) => {
    res.json({ message: "", data: {} });
};

export const deleteUser = (req: Request, res: Response) => {
    res.json({ message: "", data: {} });
};