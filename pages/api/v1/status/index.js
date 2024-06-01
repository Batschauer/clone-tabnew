import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  try {
    const result = await database.query(
      `SELECT
        current_setting('server_version') AS server_version,
        current_setting('max_connections')::int AS max_connections,
        (SELECT count(*)::int FROM pg_stat_activity WHERE state = 'active') AS used_connections;
    `,
    );

    response.status(200).json({
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: result.rows[0].server_version,
          max_connections: result.rows[0].max_connections,
          opened_connections: result.rows[0].used_connections,
        },
      },
    });
  } catch (error) {
    response.status(500).json({
      error: "Não foi possível obter as estatisticas do banco de dados.",
    });
  }
}

export default status;
