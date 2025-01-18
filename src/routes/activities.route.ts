import { Router } from "express";
import { getActivities, getActivity } from "../controllers";


const router = Router();

router.get("/", getActivities);
router.get("/:id", getActivity);

export default router;