import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    classId: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    maxStudent: {
      type: Number,
      required: true,
    },
    currentStudentNumber: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export const Class = mongoose.model("class", classSchema);
