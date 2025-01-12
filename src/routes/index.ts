import { Router } from "express";
import usersRouter from "./users.route"
import productsRouter from "./products.route"

const router = Router();

router.use(usersRouter);
router.use(productsRouter);

export default router;