var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'teste'
});

connection.connect();

connection.query('SELECT * FROM user', (error, results, fields) => {
  if (error) throw error;
  console.log(typeof results);
});

connection.end();