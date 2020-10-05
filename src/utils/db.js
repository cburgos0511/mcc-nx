const { Pool } = require("pg");

module.exports = new Pool({
  max: 10,
  connectionString: process.env.DB_CONN_STRING,
});
