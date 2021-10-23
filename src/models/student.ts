import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: String,
  lastName: String,
  age: Number,
});

module.exports = mongoose.model("student", studentSchema);
