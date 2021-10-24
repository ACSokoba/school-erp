import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  level: 
  {
    type: String,
    required: true,
  },
  studentCapacity: Number,
  studentNumber: Number,
});

module.exports = mongoose.model("class", classSchema);
