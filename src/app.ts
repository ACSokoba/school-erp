import express from "express";
import compression from "compression"; // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import MongoStore from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

// Controllers (route handlers)
import * as classController from "./controllers/classController";
import * as studentController from "./controllers/studentController";
// API keys and Passport configuration

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
const connectionOptions = {
    autoIndex: true,
};
mongoose.Promise = bluebird;

mongoose
    .connect(mongoUrl, connectionOptions)
    .then(() => {
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    })
    .catch((err) => {
        console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
        // process.exit();
    });

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        store: new MongoStore({
            mongoUrl,
            mongoOptions: {
                autoReconnect: true,
            },
        }),
    })
);
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

/**
 * App routes.
 */
app.get("/classes", classController.getClasses);
app.get("/class/:classId", classController.getClasses);

app.post("/class", classController.addClass);


app.get("/students", studentController.getStudents);
app.get("/student/:studentId", studentController.getStudentById);

app.post("/student", studentController.addStudent);


export default app;
