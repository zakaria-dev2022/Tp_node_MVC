// database.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'didi_tp_node'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL en tant que ID ' + connection.threadId);
});

module.exports = connection;
