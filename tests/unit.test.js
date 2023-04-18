const request = require("supertest");
const baseURL = "http://localhost:7123"
const request = request(baseURL);

describe("Unit tests", () => {

    /* test for checking if the main page loads successfully */
    it("Main page", async () => {
        const response = await request.get("/");
        expect(response.statusCode).toBe(200);
    });

    /* test for checking if the login page loads successfully */
    it("Login form", async () => {
        const response = await request.get("/login");
        expect(response.statusCode).toBe(200);
    });

    /* test for checking if the register page loads successfully */
    it("Register form", async () => {
        const response = await request.get("/register");
        expect(response.statusCode).toBe(200);
    });
});