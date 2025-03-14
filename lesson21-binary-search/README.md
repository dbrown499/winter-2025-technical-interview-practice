# Lesson 21: Advanced Binary Search

## Warm-up (10 minutes)

To start, let's review the basics of binary search and discuss how it can be adapted to solve not only standard search problems but also more abstract problems that might not initially seem like search problems at all.

## Written Question (5 minutes)

Question: How can binary search be applied to problems beyond simple array searches? Consider scenarios where you're looking for an optimal point or condition rather than a specific value.

Binary search can be applied to problems like finding an optimal point or condition by defining a search space (e.g., time, cost, or configuration) and using binary search to narrow down the optimal solution. Examples include minimizing/maximizing a function, searching for the smallest feasible value in a constraint-based problem, or optimizing parameters in machine learning.


## Lecture Content (20 minutes)

### Extending Binary Search

Binary search can be adapted to solve a variety of numerical and optimization problems. Today, we'll explore two specific applications: finding square roots and determining the optimal rate of consumption.

Binary Search to Find Square Roots
Finding the square root of a number can be treated as a search problem where you look for the number x such that x^2 is closest to n without going over. Here’s how you can apply binary search:

Set Initial Bounds: Depending on the value of n, set an appropriate high (n) and low (0) bound.
Midpoint and Condition: Calculate the midpoint mid. If mid \* mid is less than n, it's too low; adjust the low bound up. If it’s too high, adjust the high bound down.
Precision: Continue until the difference between high and low is less than a desired precision (e.g., 0.001).
Binary Search in Optimization: Koko Eating Bananas
In this problem, you need to determine the minimum rate K at which Koko can eat all the bananas within H hours. It’s an optimization problem where binary search finds the minimal feasible rate.

Set Initial Bounds: Set the low bound to 1 (minimum possible rate) and the high bound to the maximum number in the array of bananas (maximum rate Koko might consider).
Feasibility Check: For a given rate K, calculate the total hours H it would take Koko to eat all the bananas. If she can do it within the allowed hours, try a smaller rate; otherwise, increase the rate.
Iterative Search: Adjust the bounds based on whether the current rate allows Koko to finish in time or not, narrowing down to the minimum possible rate.
Binary Search in JavaScript Here’s a simple implementation for finding the square root of a number using binary search:

### Complexity

- Time Complexity: O(log n), where n is the number of elements or the range within which the search is performed.
- Space Complexity: O(1) for iterative implementations.

### Problem Solving (35 minutes)

Exercise: Apply binary search to solve the following problems:

### Recap (15 minutes)

Today, we extended our understanding of binary search to tackle not just direct searches but also optimization and numerical computation problems:

Square Root Calculation: How to efficiently find square roots using binary search by narrowing down the range.
Optimization with Koko’s Bananas: How binary search helps in determining the minimum required rate to achieve a goal within constraints.
Additional Resources
Binary Search for More than Just Searching
This advanced lesson highlights the versatility of binary search, showing how it can be applied to a range of mathematical and optimization problems, broadening your students' problem-solving toolkit.

### Additional Resources

- [Koko Eating Bananas](https://www.youtube.com/watch?v=U2SozAs9RzA)
