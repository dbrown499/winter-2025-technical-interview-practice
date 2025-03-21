/**
 * Write a function called `sumArrayRecursively` that takes an array of numbers
 * and returns the sum of its elements using recursion.
 *
 * Examples:
 *  sumArrayRecursively([]) => 0
 *  sumArrayRecursively([1]) => 1
 *  sumArrayRecursively([1, 2, 3]) => 6
 *
 * @param {number[]} arr - An array of numbers
 * @return {number} - The sum of the array's elements
 */
function sumArrayRecursively(arr) {
    // Base case:
    if (!arr.length) {
        return 0;
    }

    return Number(arr[0]) + Number(sumArrayRecursively(arr.slice(1, arr.length)))
}

console.log(sumArrayRecursively([234, 5, 6, 78]));

module.exports = sumArrayRecursively;
