import { Router } from "express";
import { getOrganization, getOrganizations } from "../controllers";

const router = Router();

router.get("/", getOrganizations);
router.get("/:id", getOrganization);

export default router;