import { NextFunction, Request, Response } from "express";
import { Activity } from "../models";
import mongoose from "mongoose";

export const getActivities = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activities = await Activity.find();
    res.status(200).json({
      message: "Activities retrieved successfully",
      error: false,
      data: activities,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const getActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({
        message: "Activity not found",
        error: true,
        data: undefined,
      });
      return;
    }
    const activity = await Activity.findById(id);
    res.status(200).json({
      message: "Activity retrieved successfully",
      error: false,
      data: activity,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const createActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json({
      message: "Activity created successfully",
      error: false,
      data: activity,
    });
    return;
  } catch (error) {
    next(error);
  }
};
