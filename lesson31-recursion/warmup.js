// 1. Write a function called `generateAllCombinations(array)` using backtracking:
//    - It should return an array of all possible combinations of the elements in `array`.
//    - For example, generateAllCombinations([1, 2]) might produce:
//        [], [1], [2], [1,2]
//    Hint: At each step, you either include the current element or exclude it,
//    then recurse on the rest.

function generateAllCombinations(array) {
    let result = [];

    function backtrack(start, subset) {
        result.push([...subset]); // Store a copy of the current subset
        
        for (let i = start; i < array.length; i++) {
            subset.push(array[i]); // Include element in the subset
            backtrack(i + 1, subset); // Recurse with the next index
            subset.pop(); // Remove the last element (backtrack)
        }
    }

    backtrack(0, []); // Start backtracking from index 0 with an empty subset

    // Print each subset on a new line
    result.forEach(subset => console.log(subset));
}

// console.log(generateAllCombinations([1, 2, 3]));


// 2. Implement a recursive function called `isPalindromeRecursively(str)`
//    that determines if `str` is a palindrome.
//    - A palindrome reads the same forward and backward.
//    - Base case: a string of length 0 or 1 is a palindrome.
//    - Recursive case: check if the first and last characters match,
//      then recurse on the substring excluding both.
//
//    Examples:
//      isPalindromeRecursively("racecar") => true
//      isPalindromeRecursively("hello") => false

function isPalindromeRecursively(str) {
    // Base case: If the string is empty or has only one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Recursive case: Check if the first and last characters match
    if (str[0] === str[str.length - 1]) {
        // Recurse on the substring excluding the first and last characters
        return isPalindromeRecursively(str.slice(1, str.length - 1));
    }

    // If the first and last characters don't match, it's not a palindrome
    return false;
}

// console.log(isPalindromeRecursively("racecar")); // true
// console.log(isPalindromeRecursively("hello"));   // false

// 3. Backtracking Challenge (Optional):
//    Write a function called `listAllPermutations(string)` to generate all
//    permutations of the characters in `string`.
//    - Use backtracking: pick a character, then recursively permute the remainder.
//
//    Example:
//      listAllPermutations("abc") => ["abc", "acb", "bac", "bca", "cab", "cba"]

function listAllPermutations(str) {
    let result = [];

    function backtrack(remaining, current) {
        // Base case: when no characters are left to permute, push the current permutation
        if (remaining.length === 0) {
            result.push(current);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            // Pick a character and permute the remaining string
            let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1); // Remove the current character
            backtrack(newRemaining, current + remaining[i]); // Recurse with the remaining string and updated current permutation
        }
    }

    backtrack(str, ""); // Start the backtracking process with the full string
    return result;
}

// console.log(listAllPermutations("abc"));

// Console.log your solutions to verify correctness.
