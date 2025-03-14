// 1. Given a string, return true if it contains only balanced parentheses '()'.

function getBalancedParenthesis(str) {
    let count = 0;

    for (let char of str) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }

        if (count < 0) {
            return false;
        }
    }

    return count === 0;
}
// console.log(getBalancedParenthesis('()')); // true
// console.log(getBalancedParenthesis('(())')); // true
// console.log(getBalancedParenthesis('(()')); // false


// 2. Extend the above to include curly braces '{}' and square brackets '[]'.

function getBalancedBrackets(str) {
    let stack = [];
    let bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }

    return stack.length === 0; 
}
// console.log(getBalancedBrackets('{[()]}')); // true
// console.log(getBalancedBrackets('{[(])}')); // false
// console.log(getBalancedBrackets('{{[[(())]]}}')); // true

// 3. Write a function to reverse a string using a stack.
// My code WITHOUT the stack method 
function getReversedString(str){
    let backwords = "";

    for(let i = str.length - 1; i >= 0; i--){
        backwords += str[i];
    }

    return backwords;
}

// Code WITH stack method
function getReversedString(str){
    let stack = [];

    // Push each character onto the stack
    for (let char of str) {
        stack.push(char);
    }

    let reversed = "";

    // Pop each character from the stack
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

// console.log(getReversedString("hello")); // 'olleh'

// 4. Given a string of operations ("PUSH x" or "POP"), implement a stack to process them.

function getNumberOnTopOfStack(arr){
    let stack = [];

    for (let op of arr) {
        let parts = op.split(" ");

        if (parts[0] === "PUSH") {
            stack.push(parseInt(parts[1])); 
        } else if (parts[0] === "POP") {
            if (stack.length > 0) {
                stack.pop(); 
            }
        }
    }

    return stack.length > 0 ? `Top of Stack: ${stack[stack.length - 1]}` : "Empty Stack";
}

// console.log(getNumberOnTopOfStack(["PUSH 5", "PUSH 10", "POP"])); // Top of Stack: 5


// 5. Implement a function to simulate a browser's forward and back buttons using two stacks.

class Browser {
    constructor() {
        this.backStack = [];
        this.forwardStack = [];
        this.currentPage = null;
    }

    // Visit a new page
    visit(page) {
        if (this.currentPage) {
            this.backStack.push(this.currentPage); // Save current page in back stack
        }
        this.currentPage = page; // Set the new page as current
        this.forwardStack = []; // Clear forward stack
        console.log(`Visited: ${this.currentPage}`);
    }

    // Go back to the previous page
    back() {
        if (this.backStack.length > 0) {
            this.forwardStack.push(this.currentPage); // Push current page to forward stack
            this.currentPage = this.backStack.pop(); // Pop from back stack to go to previous page
            console.log(`Back to: ${this.currentPage}`);
        } else {
            console.log("No pages in the back history");
        }
    }

    // Go forward to the next page
    forward() {
        if (this.forwardStack.length > 0) {
            this.backStack.push(this.currentPage); // Push current page to back stack
            this.currentPage = this.forwardStack.pop(); // Pop from forward stack to go to next page
            console.log(`Forward to: ${this.currentPage}`);
        } else {
            console.log("No pages in the forward history");
        }
    }
}

// Test the implementation
const browser = new Browser();
browser.visit("page1"); // "Visited: page1"
browser.visit("page2"); // "Visited: page2"
browser.back();         // "Back to: page1"
browser.visit("page3"); // "Visited: page3"
browser.back();         // "Back to: page1"
browser.forward();      // "Forward to: page3"
browser.back();         // "Back to: page1"

