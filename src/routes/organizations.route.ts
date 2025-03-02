import { Router } from "express";
import { createOrganization, deleteOrganization, getOrganization, getOrganizations, updateOrganization } from "../controllers";
import { createOrganizationValidation, deleteOrganizationValidation, updateOrganizationValidation } from "../validations";

const router = Router();

router.get("/", getOrganizations);
router.get("/:id", getOrganization);
router.post("/", createOrganizationValidation, createOrganization);
router.patch("/:id", updateOrganizationValidation, updateOrganization);
router.delete("/:id", deleteOrganizationValidation, deleteOrganization);

export default router;