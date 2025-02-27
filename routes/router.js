import { Router } from "express";
import { router as authRouter } from "./auth/auth.router.js";
import { router as bookRouter } from "./book/book.router.js";
const router = Router();

router.use("/auth", authRouter);
router.use("/book", bookRouter);
export { router };
