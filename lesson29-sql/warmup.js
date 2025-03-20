// Use this SQL code to create a table and insert data into it.

// CREATE TABLE employees (
//     id INT PRIMARY KEY,
//     name VARCHAR(50),
//     age INT,
//     department VARCHAR(50),
//     salary DECIMAL(10, 2)
// );

// 1. Write a SQL query to find the highest salary in the 'Marketing' department.

// SELECT department, salary 
// FROM employees 
// WHERE department = 'Marketing' 
// ORDER BY salary DESC 
// LIMIT 1;

///////OR/////////

// SELECT MAX(salary) AS highest_salary
// FROM employees
// WHERE department = 'Marketing';


// 2. Write a SQL query to find the names and ages of employees who are older than 30 and work in the 'HR' department.

// SELECT name, age 
// FROM employees 
// WHERE age > 30 AND department = 'HR';


// 3. Write a SQL query to find the total number of employees in each department.

// SELECT department, COUNT(*) AS employeeCount
// FROM employees
// GROUP BY department;
