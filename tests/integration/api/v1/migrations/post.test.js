import database from "infra/database.js";

beforeAll(async function () {
  await database.query("drop schema public cascade; create schema public;");
});

test("POST to /api/v1/migrations sould return 200", async function () {
  {
    const result = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST",
    });
    expect(result.status).toBe(201);

    const responseBody = await result.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);

    const migrations = await database.query("SELECT * FROM pgmigrations;");
    expect(responseBody.lenght).toEqual(migrations.rows.lenght);
  }

  {
    const result = await fetch("http://localhost:3000/api/v1/migrations", {
      method: "POST",
    });
    expect(result.status).toBe(200);

    const responseBody = await result.json();
    expect(responseBody.length).toEqual(0);
  }
});
