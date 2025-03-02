import { Router } from "express";
import { getActivities, getActivity } from "../controllers";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getActivities);
router.get("/:id", authMiddleware, getActivity);

export default router;
