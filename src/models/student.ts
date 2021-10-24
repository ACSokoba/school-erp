import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        _id: mongoose.Types.ObjectId,
        firstName: {
            type: String,
            required: true,
        },
        class: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false }
);

export const Student = mongoose.model("Student", studentSchema);
