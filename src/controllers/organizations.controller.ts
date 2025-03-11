import { NextFunction, Request, Response } from "express";
import { Organization } from "../models";
import mongoose from "mongoose";

export const createOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrganization = await Organization.create(req.body);
    res.status(201).json({
      message: "Organization created successfully",
      data: newOrganization,
      error: false,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const updateOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const updatedOrganization = await Organization.findByIdAndUpdate(
      id,
      req.body
    );
    res.status(200).json({
      message: "Organization updated successfully",
      error: false,
      data: updatedOrganization,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const getOrganizations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const organizations = await Organization.find();
    res.status(200).json({
      message: "Organizations retrieved successfully",
      error: false,
      data: organizations,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const getOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).json({
        message: "Organization not found",
        error: true,
        data: undefined,
      });
      return;
    }
    const organization = await Organization.findById(id);
    res.status(200).json({
      message: "Organization retrieved successfully",
      error: false,
      data: organization,
    });
    return;
  } catch (error) {
    next(error);
  }
};
export const deleteOrganization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedOrganization = await Organization.findByIdAndDelete(id);
    res.status(200).json({
      message: "Organization deleted successfully",
      error: false,
      data: deletedOrganization,
    });
    return;
  } catch (error) {
    next(error);
  }
};
