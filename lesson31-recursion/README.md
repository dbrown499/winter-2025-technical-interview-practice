# Lesson 31: Intermediate Recursion — Backtracking

## Warm-up (10 minutes)

### Written Question
Backtracking is a technique that builds on recursion to explore multiple potential solutions. In your own words, explain:
1. What backtracking is.

Backtracking is a technique where you build a solution step by step, undoing the last step when you hit a dead-end, and trying a different option until you find the correct solution.

2. How it differs from a simple recursive function.

While simple recursion divides the problem into smaller parts without revisiting previous steps, backtracking explores all possibilities by retracing steps and trying new paths when a solution fails.

3. Why it is helpful in solving complex problems like puzzles, mazes, or combinatorial tasks.

Backtracking helps solve complex problems like puzzles and mazes by exploring every potential solution, cutting off invalid paths early, and ensuring all options are considered until the correct one is found.

## Lecture Content (20 minutes)

### 1. Recursion Refresher
Recursion is when a function calls itself to solve smaller subproblems until it reaches a base case. We typically break a problem down into:
- **Base Case**: A simple scenario where no further recursive calls are needed.
- **Recursive Case**: The function calls itself with smaller or modified data until the base case is reached.

### 2. Introduction to Backtracking
**Backtracking** is a specialized form of recursion that is used to:
- Explore **all possible solutions** or paths in a problem space.
- **“Undo”** (or backtrack) a decision when it leads to a dead end, returning to a previous state to explore another path.

Key points:
1. **Systematic Exploration**: We try a possible move (or choice). If we reach a valid end, we succeed; if not, we **backtrack** by undoing that move and try a different one.
2. **Pruning**: We can often detect invalid paths early and skip exploring them entirely, improving efficiency.
3. **Common Uses**: Maze-solving, N-Queens problem, permutations & combinations, Sudoku, word search puzzles, and more.

### 3. Backtracking Workflow
1. **Choose**: Pick a possibility or make a decision.
2. **Explore**: Recursively solve the next part of the problem.
3. **Check**: If the solution leads to success, great! If it doesn’t:
4. **Backtrack**: Undo the last decision and try another possibility.

### 4. Example: Maze Navigation (Conceptual)
Imagine you’re at the entrance of a maze. You can move up, down, left, or right, but some paths are blocked by walls. With backtracking:
1. You **choose** a direction and step forward.
2. You **explore** deeper in that direction by recursively doing the same checks.
3. If you reach a dead end, you **backtrack** to the last position and try a new direction.

### 5. Advantages and Considerations
- **Advantages**:
  - Straightforward approach to systematically find a valid path (or all valid paths).
  - Works well for complex combinatorial problems where multiple trials are necessary.

- **Considerations**:
  - Potentially high time complexity if many paths exist.
  - Must ensure we detect and avoid revisiting states that lead to loops (e.g., marking visited positions in a maze).

## Problem Solving (35 minutes)
We’ll implement a **backtracking** solution to find a path through a maze. The maze will be represented by a 2D array of `0`s (open paths) and `1`s (walls). The goal is to move from the **top-left corner** `(0,0)` to the **bottom-right corner** `(n-1,m-1)` if a path exists.

## Recap (15 minutes)
1. **Define Backtracking**: A method to explore possible solutions and revert (backtrack) upon failure.
2. **Contrast with Simple Recursion**: Simple recursion tackles a single path until it finishes; backtracking may handle multiple branching paths and revert partial progress.
3. **Where to Use**: Maze-solving, puzzle-solving, generating permutations, search problems, etc.
4. **Optimization**: Use pruning or check constraints early to avoid exploring obviously invalid branches.

## Additional Resources
- [GeeksforGeeks: Backtracking Algorithm](https://www.geeksforgeeks.org/backtracking-algorithm/)
- [MDN Web Docs: Understanding Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [FreeCodeCamp: Recursion and Backtracking Examples](https://www.freecodecamp.org/news/tag/recursion/)
