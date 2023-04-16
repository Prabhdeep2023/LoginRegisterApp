const request = require("supertest");
const baseURL = "http://localhost:7123"
const req = request(baseURL);

/* change variable names “req” and “res” to something meaningful. */
describe("Unit tests", () => {

    it("Main page", async () => {
        const res = await req.get("/");
        expect(res.statusCode).toBe(200);
    });

    it("Login form", async () => {
        const res = await req.get("/login");
        expect(res.statusCode).toBe(200);
    });

    it("Register form", async () => {
        const res = await req.get("/register");
        expect(res.statusCode).toBe(200);
    });
});
