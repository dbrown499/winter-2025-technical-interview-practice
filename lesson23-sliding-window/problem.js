// Given a string s and an integer k, write a function that finds the length of the longest substring that contains at most k distinct characters.
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring "ece" has length 3 and contains 2 distinct characters.

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The string "aa" has length 2 and contains 1 distinct character.

// Input: s = "abcdef", k = 3
// Output: 3
// Explanation: Any substring of length 3 contains exactly 3 distinct characters.

module.exports = function longestSubstringKDistinct(s, k) {
    if (k === 0 || s.length === 0) return 0;

    let left = 0;
    let maxLength = 0;
    let charCount = new Map(); // To store character frequency

    for (let right = 0; right < s.length; right++) {
        // Add the current character to the map
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);

        // If the number of distinct characters exceeds k, shrink the window
        while (charCount.size > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            if (charCount.get(s[left]) === 0) {
                charCount.delete(s[left]);
            }
            left++; // Move the left pointer
        }

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};
