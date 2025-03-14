/**
 * Given a string containing just the characters '(', ')'.
 *
 * We will say this string is considered valid if:
 * 1. Open brackets must be closed by close brackets.
 * 2. Open brackets must be closed in the correct order.
 *
 * For example, "()" and "()(())" are valid but "())" and "()(()" are not.
 *
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    
    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;

}
console.log(isValid("(', ')")); //false
console.log(isValid("()")); //true
console.log(isValid("()(())")); //true
console.log(isValid("())")); //false
console.log(isValid("()(()")); //false

module.exports = isValid;
