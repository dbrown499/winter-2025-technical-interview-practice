# SQL Lesson 2: Advanced SQL Queries and Optimization

## Warm-up (15 minutes)

- Syntax Problem (10 minutes): Correct a flawed SQL query that is supposed to list all orders from the last month but returns an error.
- Written Question (5 minutes): Explain the difference between INNER JOIN and LEFT JOIN.

INNER JOIN: Only returns rows that exist in both tables based on the join condition.
LEFT JOIN: Returns all rows from the left table, even if there’s no matching row in the right table (hence NULL for unmatched rows from the right).

## Topic (20 minutes)

### Lecture: Advanced SQL Techniques

- Using subqueries and common table expressions (CTEs)
- SQL performance tuning and index optimization
- Complex joins and their impact on query performance

Q1: What is the difference between a subquery and a CTE?

A subquery is a query nested inside another query, typically used to manipulate or filter a single set of data. In contrast, a Common Table Expression (CTE) is a temporary result set that can be referenced within the main query and is useful for organizing and manipulating multiple sets of data, especially in complex queries.

Q2: How can indexes improve SQL query performance?

Indexes improve SQL query performance by allowing the database to quickly locate rows based on the indexed columns. They help with filtering (WHERE clauses), sorting (ORDER BY), and joining tables, reducing the time it takes to access specific rows and speeding up queries.

## Problem Solving (35 minutes)

- SQL Exercises:
  Picking up from last lesson. See how far you can get in [SQLZoo](https://sqlzoo.net/wiki/SQL_Tutorial)

## Recap (10 minutes)

- Review the syntax problem and the written question.
- Discuss how far you got in SQLZoo.
- Feedback: Collect feedback to assess understanding and identify areas needing additional clarification.

## Additional Resources

- [stratascratch](https://platform.stratascratch.com/coding?code_type=1): coding questions for data folks
