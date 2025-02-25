import { Router } from "express";
import { signIn, signUp } from "../../controller/auth.controller.js";
import {
  validateUserSignin,
  validateUserSignup,
} from "../../middleware/verifyuser.middleware.js";
const router = Router();

router.post("/sign-up", validateUserSignup, signUp);
router.post("/sign-in", validateUserSignin, signIn);
export { router };
