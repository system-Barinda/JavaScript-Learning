const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password:'12345',
  database: 'users',
});

async function getUsers() {
  const res = await pool.query('SELECT * FROM students');
  console.log(res.rows);
}

getUsers();
