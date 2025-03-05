import { Router } from "express";
import { createOrganization, deleteOrganization, getOrganization, getOrganizations, updateOrganization } from "../controllers";
import { createOrganizationValidation, deleteOrganizationValidation, updateOrganizationValidation } from "../validations";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", getOrganizations);
router.get("/:id", authMiddleware, getOrganization);
router.post("/", createOrganizationValidation, createOrganization);
router.patch("/:id", updateOrganizationValidation, updateOrganization);
router.delete("/:id", deleteOrganizationValidation, deleteOrganization);

export default router;