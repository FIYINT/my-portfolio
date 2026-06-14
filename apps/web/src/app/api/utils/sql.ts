import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const sql = async (strings: TemplateStringsArray, ...values: unknown[]) => {
  const query = strings.reduce((acc, str, i) => acc + str + (values[i] !== undefined ? `$${i + 1}` : ''), '');
  const result = await pool.query(query, values);
  return result.rows;
};

export default sql;