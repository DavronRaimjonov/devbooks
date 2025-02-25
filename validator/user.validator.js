import Joi from "joi";

const userValidatorSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required(),
  last_name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone_number: Joi.number().integer().min(12).required(),
  password: Joi.string().min(3).max(10).required(),
});

const loginValidatorSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(10).required(),
});

export { userValidatorSchema, loginValidatorSchema };
