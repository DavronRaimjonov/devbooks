import {
  userValidatorSchema,
  loginValidatorSchema,
} from "../validator/user.validator.js";
import { CustomError } from "../errors/index.js";

const validateUserSignup = (req, res, next) => {
  try {
    const { error } = userValidatorSchema.validate(req.body);
    if (error) {
      throw new CustomError(400, error.details[0].message);
    }
    next();
  } catch (error) {
    next(error);
  }
};
const validateUserSignin = (req, res, next) => {
  try {
    const { error } = loginValidatorSchema.validate(req.body);
    if (error) {
      throw new CustomError(400, error.details[0].message);
    }
    next();
  } catch (error) {
    next(error);
  }
};
export { validateUserSignup, validateUserSignin };
