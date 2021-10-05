const inquirer = require('inquirer');
const db = require('./db/conncection');
const consoleTable = require('console.table');
const { prompt } = require('inquirer');
// const mysql = require('mysql2');

function initalSetup() {
  console.log(`
    
    ================
    Employee Tracker
    ================
    `);
    // Initital Prompt begins!
}
prompt([
    {
        type: "list",
        name: "list",
        message: "Please choose an option!",
        choices: [
            "View ALL Employees",
            "View ALL Roles",
            "View ALL Departments",
            "Add Employees",
            "Add Role",
            "Add Department",
            "Leave",
        ],
    },
]).then((answers) => {
    // if answered seleceted
    if(answers.list === "View All Employees") {
        viewAllEmployees();
    } else if (answers.list === "View All Roles") {
        viewAllRoles();
    } else if (answers.list === "View All Departments") {
        viewAllDepartments();
    } else if (answers.list === "Add Employeee") {
        addEmployees();
    } else if (answers.list === "Add Role") {
        addRole();
    } else if (answers.list === "Add Department") {
        addDepartment();
    } else if (answers.list === "Leave") {
        db.end();
    }
});

function viewAllEmployees() {
    console.log(`
    ====================
         Employees
    ====================
    `)
    db.query('SELECT employee.first_name, employee.last_name, role.title, department.name, role.salary, manager.first_name, manager.lastname AS "manager_lastname" FROM employee LEFT JOIN role ON employee.role_id = role_id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id;',
    function (err, res) {
        if(err) throw err;
        console.consoleTable(res);
        initalSetup();
    }
    );
    // const sql = "" 
}

function viewAllRoles() {
    console.log(`
    ====================
          Roles
    ====================
    `)

    // const sql = ""
    
}

function viewAllDepartments() {
    console.log(`
    ====================
        Departments
    ====================
    `)
    // const sql = ""
}

function addEmployees() {
    console.log(`
    ====================
       Added Employee
    ====================
    `)
    // const sql = ""
}

function addRole() {
    console.log(`
    ====================
        Role Added
    ====================
    `)
    // const sql = 
}

function addDepartment() {
    console.log(`
    ====================
      Added Department
    ====================
    `)
    // const sql = 
}