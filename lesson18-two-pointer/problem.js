/**
 * Given a string, determine if it is a valid palindrome.
 * A valid palindrome is a string that reads the same forwards and backwards,
 * ignoring any non-alphanumeric characters.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - True if the string is a valid palindrome, false otherwise.
 *
 * Examples:
 * Input: "Madam, in Eden, I'm Adam."
 * Output: true
 *
 * Input: "Hello, World!"
 * Output: false
 */
function isValidPalindrome(str) {
    let regex = /[a-zA-Z0-9]+/g;
    let newStr = str.match(regex).join("").toLowerCase();
    let right = newStr.length - 1;

    for (let left = 0; left <= (right/2) ; left++){
        if(newStr[left] !== newStr[right]){
            return false;
        }
        right--;
    }

    return true;
}
console.log(isValidPalindrome("Madam, in Eden, I'm Adam."));
console.log(isValidPalindrome("cat"));
console.log(isValidPalindrome("racecar"));

module.exports = isValidPalindrome;
