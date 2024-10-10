import database from "infra/database";

export default async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const serverVersionResult = await database.query("SHOW server_version;");
  const serverVersion = serverVersionResult.rows[0].server_version;

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const openedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const openedConnections = openedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: serverVersion,
        max_connections: parseInt(maxConnections),
        opened_connections: openedConnections,
      },
    },
  });
}

// dependencies: {
//   database: {
//     version: server_version
//   }
// }
// const versionResult = await database.query("SHOW server_version");
// const serverVersion = versionResult.rows[0].server_version;

// const maxConnectonsResults = await database.query("SHOW max_connections");
// const maxConnections = maxConnectonsResults.rows[0].max_connections;

// const openedConnectionsResults = await database.query(
//   "SELECT count(*) FROM pg_stat_activity;",
// );
// const openendConnections = openedConnectionsResults.rows[0].count;

// response.status(200).json({
//   updated_at: updatedAt,
//   server_version: serverVersion,
//   max_connections: maxConnections,
//   opened_connections: openendConnections,
// });
