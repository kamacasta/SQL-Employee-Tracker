USE employeeConnection;

-- Department 
INSERT INTO department(name)
VALUES ('Engineer'),('Management'),('HR'),('Sales')

-- Role
INSERT INTO role(title, salary, department_id)
VALUES ('Management', 150000, 1),('Engineer', 125000, 2),('Sales', 110000, 3),('HR', 75000, 4)

-- Employee
INSERT INTO employee(first_name, last_name, role_id)
VALUES ('Kama', 'Casta', 1, NULL),('Rick', 'Sanchez', 2, NULL),('Morty', 'Smith', 3, NULL),('MR', 'MEESEKS', 4, NULL)