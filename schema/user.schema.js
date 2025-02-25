import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      minLength: 2,
      required: [true, "First name must be"],
    },
    last_name: {
      type: String,
      minLength: 2,
      required: [true, "Last name must be"],
    },
    phone_number: {
      type: Number,
      minLength: 12,
      required: [true, "Phone number must be"],
    },
    email: {
      type: String,
      required: [true, "Email  must be"],
    },
    password: {
      type: String,
      minLength: 3,
      required: [true, "Password must be"],
    },
  },
  {
    versionKey: false,
  }
);

const userSchemas = model("User", userSchema);
export default userSchemas;
