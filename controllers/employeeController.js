// // controllers/employeeController.js

// const Employee = require('../models/employeeModel');
// const connection = require('../database');

// exports.addEmployee = (req, res) => {
//   const { nom, salaire } = req.body;
//   const INSERT_EMPLOYEE_QUERY = 'INSERT INTO employee (nom, salaire) VALUES (?, ?)';
//   connection.query(INSERT_EMPLOYEE_QUERY, [nom, salaire], (err, results) => {
//     if (err) throw err;
//     res.send('Employé ajouté avec succès');
//   });
// };

// exports.getEmployees = (req, res) => {
//   const SELECT_EMPLOYEES_QUERY = 'SELECT * FROM employee';
//   connection.query(SELECT_EMPLOYEES_QUERY, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// };

// exports.updateEmployee = (req, res) => {
//   const { nom, salaire } = req.body;
//   const { id } = req.params;
//   const UPDATE_EMPLOYEE_QUERY = 'UPDATE employee SET nom = ?, salaire = ? WHERE id = ?';
//   connection.query(UPDATE_EMPLOYEE_QUERY, [nom, salaire, id], (err, results) => {
//     if (err) throw err;
//     res.send('Employé modifié avec succès');
//   });
// };

// exports.deleteEmployee = (req, res) => {
//   const { id } = req.params;
//   const DELETE_EMPLOYEE_QUERY = 'DELETE FROM employee WHERE id = ?';
//   connection.query(DELETE_EMPLOYEE_QUERY, [id], (err, results) => {
//     if (err) throw err;
//     res.send('Employé supprimé avec succès');
//   });
// };


// controllers/employeeController.js

const Employee = require('../models/employeeModel');
const connection = require('../database');

exports.addEmployee = (req, res) => {
  const { nom, salaire } = req.body;
  const INSERT_EMPLOYEE_QUERY = 'INSERT INTO employee (nom, salaire) VALUES (?, ?)';
  connection.query(INSERT_EMPLOYEE_QUERY, [nom, salaire], (err, results) => {
    if (err) throw err;
    res.send('Employé ajouté avec succès');
  });
};

exports.getEmployees = (req, res) => {
  const SELECT_EMPLOYEES_QUERY = 'SELECT * FROM employee';
  connection.query(SELECT_EMPLOYEES_QUERY, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.updateEmployee = (req, res) => {
  const { nom, salaire } = req.body;
  const { id } = req.params;
  const UPDATE_EMPLOYEE_QUERY = 'UPDATE employee SET nom = ?, salaire = ? WHERE id = ?';
  connection.query(UPDATE_EMPLOYEE_QUERY, [nom, salaire, id], (err, results) => {
    if (err) throw err;
    res.send('Employé modifié avec succès');
  });
};

exports.deleteEmployee = (req, res) => {
  const { id } = req.params;
  const DELETE_EMPLOYEE_QUERY = 'DELETE FROM employee WHERE id = ?';
  connection.query(DELETE_EMPLOYEE_QUERY, [id], (err, results) => {
    if (err) throw err;
    res.send('Employé supprimé avec succès');
  });
};
