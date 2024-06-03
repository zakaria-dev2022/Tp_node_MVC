// // app.js

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const employeeController = require('./controllers/employeeController');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'didi_tp_node'
// });
// connection.connect();

// app.post('/employees', employeeController.addEmployee);
// app.get('/employees', employeeController.getEmployees);
// app.put('/employees/:id', employeeController.updateEmployee);
// app.delete('/employees/:id', employeeController.deleteEmployee);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Serveur écoutant sur le port ${port}`);
// });


// app.js

const express = require('express');
const bodyParser = require('body-parser');
const employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/employees', employeeController.addEmployee);
app.get('/employees', employeeController.getEmployees);
app.put('/employees/:id', employeeController.updateEmployee);
app.delete('/employees/:id', employeeController.deleteEmployee);

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
