const request = require("supertest");
const server = require("./server");

describe("Default routes", () => {
  beforeAll((done) => {
    done();
  });
  afterAll((done) => {
    server.close();
    done();
  });
  it("request to root should return 'Hello, World!'", async (done) => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    done();
  });
});
