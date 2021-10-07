-- Drop table
DROP DATABASE IF EXISTS employeeConnection;

-- Create database
CREATE DATABASE employeeConnection;

-- Use database
USE employeeConnection;

-- Role Table
CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee Table
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
)

-- Department Table
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);