import cloudinary from "../config/cloudinary.js";
import { CustomError } from "../errors/index.js";
import userSchemas from "../schema/user.schema.js";
import { hashPassword, signInJwt } from "../utils/jwt.js";
import { ResData } from "../utils/responseHelpers.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res, next) => {
  try {
    const body = req.body;
    const password = await hashPassword(body.password);
    const data = await userSchemas.create({ ...body, password });
    const token = signInJwt({ id: data._id });
    const resData = new ResData(201, "succses", { user: data, token });
    res.status(resData.status).json(resData);
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await userSchemas.findOne({ email: body.email });
    if (!user) {
      throw new CustomError(400, "Email or password wrong !");
    }
    const isMatchPassword = await bcrypt.compare(body.password, user.password);
    if (!isMatchPassword) {
      throw new CustomError(400, "Email or password wrong !");
    }
    const token = signInJwt({ id: user._id });
    const resData = new ResData(200, "succses", { user, token });
    res.status(resData.status).json(resData);
  } catch (error) {
    next(error);
  }
};

export const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new CustomError(400, "Image must be");
    }
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
    });
    await userSchemas.updateOne(
      { _id: req.userId },
      { $set: { image: result.secure_url } }
    );
    res.status(201).json({ message: "succses" });
  } catch (error) {
    next(error);
  }
};
