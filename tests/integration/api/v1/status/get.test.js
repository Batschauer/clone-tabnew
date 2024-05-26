test("GET to /api/v1/status sould return 200", function () {
  fetch("http://localhost:3000/api/v1/status").then((data) =>
    expect(data.status).toBe(200),
  );
});
