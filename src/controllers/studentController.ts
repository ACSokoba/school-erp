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
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(500).json({ error: "Couldn't add student" });
            }
        })
        .catch((error) => {
            res.status(500).json({ error: "Couldn't add student" });
        });
};
export const getStudentById = (req: Request, res: Response, next: NextFunction): void => {
    Student.findById(req.params)
        .exec()
        .then((student) => {
            if (student) {
                res.status(200).json(student);
            } else {
                res.status(404).json({ message: "No valid entry provided" });
            }
        })
        .catch((error) => {
            res.status(500).send({ error: "Couldn't fetch the student" });
        });
};
