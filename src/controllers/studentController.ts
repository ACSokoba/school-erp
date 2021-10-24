import { Request, Response, NextFunction } from "express";
import { Student } from "../models/student";
import mongoose from "mongoose";

export const getStudents = (req: Request, res: Response, next: NextFunction): void => {
    Student.find()
        .then((students) => {
            res.status(200).json(students);
        })
        .catch((error) => {
            res.status(500).send({
                error: "Couldn't fetch the list of students!",
            });
        });
};

export const addStudent = (req: Request, res: Response, next: NextFunction): void => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        class: req.body?.class,
    });
    student
        .save()
        .then((student) => {
            res.status(200).json(student);
        })
        .catch((error) => {
            res.status(500).json({ error: "Couldn't add student" });
        });
};
export const getStudentById = (req: Request, res: Response, next: NextFunction): void => {
    console.log(req.params);
    Student.findById(req.params.studentId)
        .then((student) => {
            res.status(200).json(student);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: "Couldn't fetch the student" });
        });
};
