const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'B@hrein8018',
  database: 'app_expenses',
})

module.exports = connection;
