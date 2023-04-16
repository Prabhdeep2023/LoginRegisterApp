const request = require("supertest");
const baseURL = "http://localhost:7123"
const req = request(baseURL);

describe("Unit tests", () => {

    /* Add the description */
    it("Main page", async () => {
        const res = await req.get("/");
        expect(res.statusCode).toBe(200);
    });

    /* Add the description */
    it("Login form", async () => {
        const res = await req.get("/login");
        expect(res.statusCode).toBe(200);
    });

    /* Add the description */
    it("Register form", async () => {
        const res = await req.get("/register");
        expect(res.statusCode).toBe(200);
    });
});
