test("GET to /api/v1/status Should return status 200", async () => {
  const url = "http://localhost:3000/api/v1/status";
  const response = await fetch(url);
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parcedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parcedUpdatedAt);

  expect(responseBody.dependencies.database.version).toBe("16.0");
  expect(responseBody.dependencies.database.max_connections).toBe(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

// TEST SERVER VERSION

// // Test Server version
// console.log(responseBody);
// expect(responseBody.server_version).toBe("16.0");

// // Test max connections
// expect(responseBody.max_connections).toBe("100");

// expect(responseBody.opened_connections).toBeDefined();
