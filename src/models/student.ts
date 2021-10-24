import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
