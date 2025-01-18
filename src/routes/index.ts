import { Router } from "express";
import usersRouter from "./users.route"
import organizationsRouter from "./organizations.route"
import activitiesRouter from "./activities.route"

const router = Router();

router.use("/users", usersRouter);
router.use("/organizations", organizationsRouter);
router.use("/activities", activitiesRouter);

export default router;