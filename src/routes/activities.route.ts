import { Router } from "express";
import { getActivities, getActivity, createActivity } from "../controllers";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createActivityValidation } from "../validations";

const router = Router();

router.get("/", getActivities);
router.get("/:id", authMiddleware, getActivity);
router.post("/", createActivityValidation, createActivity);

export default router;
