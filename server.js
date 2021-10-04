const inquirer = require('inquirer');
const db = require('./db/conncection');
const consoleTable = require('console.table');
const { prompt } = require('inquirer');
const mysql = require('mysql2');

function initalSetup() {
  console.log(`
    
    ----------------
    Employee Tracker
    ----------------
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


