-- Drop table
DROP DATABASE IF EXISTS Employee;

-- Create database
CREATE DATABASE Employee;

-- Use database
USE Employee;

-- Department Table
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

-- Role Table
CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee Table
CREATE TABLE Employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES Employee(id)
)