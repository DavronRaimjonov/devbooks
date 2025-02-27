import { Router } from "express";
import {
  signIn,
  signUp,
  uploadImage,
} from "../../controller/auth.controller.js";
import {
  validateUserSignin,
  validateUserSignup,
} from "../../middleware/validator.middleware.js";
import { verifyMiddlewere } from "../../middleware/verifytoken.middleware.js";
import { upload } from "../../config/multer.js";
const router = Router();

router.post("/sign-up", validateUserSignup, signUp);
router.post("/sign-in", validateUserSignin, signIn);
router.post(
  "/upload-img",
  verifyMiddlewere,
  upload.single("image"),
  uploadImage
);
export { router };
