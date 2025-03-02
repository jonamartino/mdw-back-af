import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers";
import { createUserValidation, deleteUserValidation, getUserValidation, updateUserValidation } from "../validations";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserValidation, getUser);

router.post("/", createUserValidation, createUser);

router.patch("/:id", updateUserValidation, updateUser);

router.delete("/:id", deleteUserValidation, deleteUser);

export default router;