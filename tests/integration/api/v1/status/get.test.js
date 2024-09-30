test("GET to /api/v1/status Should return status 200", async () => {
  const url = "http://localhost:3000/api/v1/status";
  const response = await fetch(url);
  expect(response.status).toBe(200);
});
