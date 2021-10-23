import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  level: String,
  studentCapacity: Number,
  studentNumber: Number,
});

module.exports = mongoose.model("class", classSchema);
