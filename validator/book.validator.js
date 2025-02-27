import Joi from "joi";

export const addBookValidatorSchema = Joi.object({
  title: Joi.string().required(),
  pages: Joi.number().required(),
  year: Joi.string().required(),
  price: Joi.number().required(),
  country: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required().min(10),
  image: Joi.string().required().min(10),
  category: Joi.string().required(),
});
