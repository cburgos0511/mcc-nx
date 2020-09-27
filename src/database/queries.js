const sql = require("sql-template-strings");
const db = require("../utils/db");

const test = async () => {
  const { rows } = await db
    .query(
      sql`
         select * from "user"
      `
    )
    .catch((err) => {
      throw new Error("Database connection error");
    });
  console.log(rows);

  return rows;
};

module.exports = { test };
