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

// Function for viewing all employees
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

// Function for viewing all roles
function viewAllRoles() {
    console.log(`
    ====================
          Roles
    ====================
    `)
    db.query(' SELECT role.title, role.salary, department.name FROM role LEFT JOIN department ON role.department_id = department_id',
    function (err, res) {
        if(err) throw err;
        console.consoleTable(res);
        initalSetup();
    }
    );
    // const sql = ""
}

// Function to view all departments
function viewAllDepartments() {
    console.log(`
    ====================
        Departments
    ====================
    `)
    db.query('SELECT * FROM department',
    function (err, res) {
        if(err) throw err;
        console.consoleTable(res);
        initalSetup();
    }
    );
    // const sql = ""
}

// Function for adding employees
function addEmployees() {
    prompt([
        {
            type:'input',
            name:'first_name',
            message: 'What is the employees first name?'
        },
        {
            type:'input',
            name:'last_name',
            message: 'What is the employees last name?'
        },
        {
            type:'input',
            name:'role_id',
            message: 'What is the employees last name?'
        },
        {
            type:'input',
            name:'manager_id',
            message: 'What is the employees last name?'
        },
    ]).then(function (answer) {
        db.query('INSERT INTO employee SET', 
        [answer],
        function (err) {
            console.log(`
            ====================
               Added Employee
            ====================
            `)
            initalSetup();
        }
        )
    })
    // const sql = ""
}

// Function for adding 
function addRole() {
    db.query('select id, name from department', (err, department) => {
        prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the role you would like to give?'
            },
            {   
                type: 'input',
                name: 'title',
                message: 'What is the salary of the role you would like to add'
            },
            {   
                type: 'input',
                name: 'title',
                message: 'What is the department id for the current role'
            }
        ]).then(function (answer) {
            db.query('INSERT INTO role SET ?',
            [answer],
            function(err) {
                if (err) throw err;
                console.log(`
                ====================
                    Role Added
                ====================
            `);
            initalSetup();
            })
        })
    })
 
    // const sql = 
}

// Function for adding a department
function addDepartment() {
    console.log(`
    ====================
      Added Department
    ====================
    `)
    // const sql = 
}

initalSetup();
