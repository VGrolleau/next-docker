import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: 'db',
    user: 'user',
    password: 'password',
    database: 'nextjsdb',
  });

  const [rows] = await connection.execute('SELECT NOW()');
  res.status(200).json({ time: rows[0] });
}
