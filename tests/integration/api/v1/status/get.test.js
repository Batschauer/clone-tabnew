import orchestrator from "tests/orchestrator.js";

beforeAll(async function () {
  await orchestrator.waitForAllServices();
});

test("GET to /api/v1/status sould return 200", async function () {
  const result = await fetch("http://localhost:3000/api/v1/status");
  expect(result.status).toBe(200);

  const responseBody = await result.json();
  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toBe("16.3");

  expect(responseBody.dependencies.database.max_connections).toBe(100);

  expect(responseBody.dependencies.database.opened_connections).toBe(1);
});
