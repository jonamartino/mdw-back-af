import { NextFunction, Request, Response } from "express";
import { User } from "../models";
import mongoose from "mongoose";
import firebaseApp from "../config/firebase";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const formattedDate = new Date(req.body.birthDate);
  const { password, ...restBody } = req.body;
  try {
    const { uid } = await firebaseApp
      .auth()
      .createUser({ email: req.body.email, password });

    const newUser = await User.create({
      ...restBody,
      firebaseUid: uid,
      birthDate: formattedDate,
    });
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
      error: false,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users retrieved successfully",
      error: false,
      data: users,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({
        message: "User not found",
        error: true,
        data: undefined,
      });
      return;
    }
    const activity = await User.findById(id);
    res.status(200).json({
      message: "User retrieved successfully",
      error: false,
      data: activity,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const birthDate = new Date(req.body.birthDate);
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      ...req.body,
      birthDate,
    });
    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
      error: false,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).json({
        message: "User not Found",
        error: true,
      });
      return;
    }
    res.status(204).send();
    return;
  } catch (error) {
    next(error);
  }
};
