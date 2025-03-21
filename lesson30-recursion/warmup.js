// 1. Write a simple recursive function `countDown(n)` that logs numbers from n down to 1.
//    Base case: if n <= 0, stop.

function countDown(n) {
    // Base case: If n is less than or equal to 0, stop
    if (n <= 0) {
        return;
    }
    console.log(n)
    return countDown(n - 1);
}

// console.log(countDown(3)); // Expected output: 3 2 1

// 2. Implement a function `isEvenRecursively(n)` that determines if a number is even using recursion.
//    Base case: 0 is even; 1 is odd.
//    If n < 0, handle negative by converting to positive or handle sign accordingly.

function isEvenRecursively(n) {
    // Get the absolute value of every number 
    let num = Math.abs(n);

    // Base cases
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    }

    // If input number is even or odd, minus 2 and recursion it until it reaches 0 or 1
    if (num % 2 === 0 || num % 2 === 1) {
        return isEvenRecursively(num - 2);
    }

}

//////////////// OR //////////////////

// function isEvenRecursively(n) {
//     // Convert negative numbers to positive and use base cases
//     if (n < 0) return isEvenRecursively(-n);
//     if (n === 0) return true;
//     if (n === 1) return false;

//     return isEvenRecursively(n - 2);
// }

// console.log(isEvenRecursively(4)); // Expected output: true
// console.log(isEvenRecursively(7)); // Expected output: false 
// console.log(isEvenRecursively(-2)); // Expected output: true 


// 3. Create a recursive function `reverseStringRecursively(str)` that returns the reversed version of `str`.
//    Base case: empty string or length of 1 is already reversed.
//    Recursive case: last character + reverse of substring without the last character.

function reverseStringRecursively(str) {

    // Base case: if the string is empty or has a length of 1, it's already reversed
    if (!str || str.length === 1) {
        return str;
    }
    // Recursive case: last character + reverse of the substring without the last character
    return str[str.length - 1] + reverseStringRecursively(str.slice(0, str.length - 1));
}

// console.log(reverseStringRecursively("abc")); // Expected output: "cba"
// console.log(reverseStringRecursively("hello")); // Expected output: "olleh"

// 4. Test each function with console.log and verify the outputs match your expectations.
