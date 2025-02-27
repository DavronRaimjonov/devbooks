import { Schema, model } from "mongoose";

const LiteraturePeriod = {
  TEMURIY: "temuriylar_davri",
  JADID: "jadid_adabiyoti",
  SOVET: "sovet_davri",
  MUSTAQILLIK: "mustaqillik_davri",
};
const bookSchmea = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: Object.values(LiteraturePeriod),
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const bookSchmeas = model("Book", bookSchmea);
export default bookSchmeas;
