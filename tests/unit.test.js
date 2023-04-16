const request = require("supertest");
const baseURL = "http://localhost:7123"
const req = request(baseURL);

describe("Unit tests", () => {

    it("Main page", async () => {                   // Add the description for the unit test
        const res = await req.get("/");
        expect(res.statusCode).toBe(200);
    });

    it("Login form", async () => {                  // Add the description for the unit test
        const res = await req.get("/login");
        expect(res.statusCode).toBe(200);
    });

    it("Register form", async () => {               // Add the description for the unit test
        const res = await req.get("/register");
        expect(res.statusCode).toBe(200);
    });
});
