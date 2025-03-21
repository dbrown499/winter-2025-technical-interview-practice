/**
 * Use backtracking to find a path from the top-left corner (0,0) to
 * the bottom-right corner (n-1, m-1) in a maze (grid).
 *
 * Maze Representation:
 * - 0 = open path
 * - 1 = wall (blocked)
 *
 * Return:
 * - An array of coordinates representing a valid path, if found.
 * - An empty array if no path exists.
 *
 * NOTE: This implementation explores neighbors in the order:
 *  Right -> Down -> Left -> Up
 * Ensuring we pass the test that expects the path:
 *  (0,0) -> (0,1) -> (1,1) -> (1,2) -> (2,2)
 *
 * Example:
 *   For a 3x3 grid:
 *     [
 *       [0, 0, 1],
 *       [0, 0, 0],
 *       [1, 0, 0]
 *     ]
 *   A path the tests specifically look for is:
 *     [ [0,0], [0,1], [1,1], [1,2], [2,2] ]
 */
 function solveMaze(maze) {
    // Number of rows in the maze
    const rows = maze.length;
    // If maze is empty, no path can exist
    if (rows === 0) return [];
  
    // Number of columns (assuming rectangular grid)
    const cols = maze[0].length;
  
    // 'path' will store the coordinates (row,col) of the route we are building
    const path = [];
  
    // 'visited' tracks the cells that have been visited to prevent re-traversing
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  
    /**
     * backtrack(r, c)
     * Attempts to move to the cell (r, c).
     * If it leads to a solution, return true.
     * If it doesn't, undo changes (backtrack) and return false.
     */
    function backtrack(r, c) {
      // 1. Check if we're out of bounds or on a blocked cell or have visited before
      if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
      if (maze[r][c] === 1 || visited[r][c]) return false;
  
      // 2. Mark the current cell as visited and add it to the path
      visited[r][c] = true;
      path.push([r, c]);
  
      // 3. Check if we've reached the goal: bottom-right corner
      if (r === rows - 1 && c === cols - 1) {
        return true; // Path complete
      }
  
      // 4. Explore possible neighbors in the order:
      //    Right -> Down -> Left -> Up
      //    This order ensures we match the test's expected path for the 3x3 maze.
      if (
        backtrack(r, c + 1) ||  // Move right
        backtrack(r + 1, c) ||  // Move down
        backtrack(r, c - 1) ||  // Move left
        backtrack(r - 1, c)     // Move up
      ) {
        return true;
      }
  
      // 5. If none of the neighbors lead to a solution, we backtrack:
      //    - Remove the last cell from 'path'
      //    - Mark the cell as unvisited again
      path.pop();
      visited[r][c] = false;
  
      // 6. Return false to indicate this route didn't work
      return false;
    }
  
    // Begin backtracking from the top-left cell (0,0)
    const success = backtrack(0, 0);
  
    // If success is true, 'path' contains the valid route.
    // Otherwise, return an empty array.
    return success ? path : [];
  }

  const maze = [
    [0, 0, 1],
    [0, 0, 0],
    [1, 0, 0]
];

console.log(solveMaze(maze));
  
  module.exports = solveMaze;
  