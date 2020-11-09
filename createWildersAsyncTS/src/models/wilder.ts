import mongoose from "mongoose";

const { Schema } = mongoose;

const WilderSchema = new Schema({
  identity: {
    name: { type: String, unique: true },
    firstName: { type: String, unique: true },
    age: { type: String },
  },
  skills: [
    {
      title: String,
      votes: Number,
    },
  ],
});

export = mongoose.model("WilderModel", WilderSchema);
