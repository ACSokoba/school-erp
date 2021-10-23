import request from "supertest";
import app from "../src/app";
import { expect } from "chai";

describe("GET /students", () => {
    it("should return 200 OK", () => {
        return request(app).get("/students")
            .expect(200);
    });
});

describe("POST /login", () => {
    it("should return some defined error message with valid parameters", (done) => {
        request(app).post("/login")
            .field("email", "john@me.com")
            .field("password", "Hunter2")
            .expect(302)
            .end((err, res) => {
                expect(res.error).not.to.be.undefined;
                done();
            });

    });
});
