const sql = require("sql-template-strings");
const db = require("../utils/db");

const getAllMessages = async () => {
  const { rows } = await db
    .query(
      sql`
      select sp.first_name, sp.last_name, m.message_id, m.name as message_name, m.date, m.file_size, m.duration, m.s3_id, s.start_date, s.end_date, s.name as series_name  from speaker sp
      inner join message m using (speaker_id)
      full outer join series s using (series_id)
      order by sp.first_name asc
      
      `
    )
    .catch((err) => {
      throw new Error("Database connection error");
    });

  return rows;
};

module.exports = { getAllMessages };
