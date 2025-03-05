# Lesson 23 Sliding Window

## Warm-up (10 minutes)
Quick review: Recap how a basic sliding window algorithm works using the example from the last class. Discuss how it optimizes operations like finding maximum sums or longest substrings without recalculating from scratch.

Now, write a simple sliding window example that calculates the maximum product of any three consecutive numbers in an array.

## Written Question (5 minutes)
Here’s a common mistake when expanding the sliding window:

```javascript
function minSubArrayLen(s, nums) {
    let start = 0;
    let sum = 0;
    let minLength = Infinity;
    
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while (sum >= s) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= nums[start];
            start++;  // Correctly shrinking the window, but when should it stop?
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}
```

Question: What could potentially go wrong with the while loop in this function? Consider edge cases where nums may contain zeros or negative numbers.

If nums has zeros or negative numbers, shrinking the window might not actually decrease sum like we expect. That could mess things up by either making the loop run longer than it should or skipping over valid subarrays.

## Lecture Content (20 minutes)
Advanced Concepts in Sliding Window Technique

While the basic sliding window approach focuses on simple sum or count operations, let’s explore more complex scenarios:

Variable Window Sizes: Unlike fixed-size windows, variable window sizes adjust based on certain conditions, such as the sum being greater or smaller than a target.

Handling Negative Values: Challenges arise in sliding windows when negative numbers are involved, as they can expand or shrink the effective size of the window unexpectedly.

Multidimensional Data: Applying sliding windows to problems involving matrices or multiple data streams.

Example: Maximum Sum of Any Three Consecutive Elements (Handling Negatives)

``` javascript
function maxSum(arr, k) {
    if (arr.length < k) return null; // Handle edge case
    let windowSum = 0, maxSum = 0;
    
    for(let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    maxSum = windowSum;
    for(let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, windowSum); // Check max within the updated window
    }
    
    return maxSum;
}
```

## Problem Solving (35 minutes)


## Recap (15 minutes)
-   Explored advanced sliding window techniques including handling negative numbers and variable window sizes.
- Applied sliding windows to complex problems requiring careful management of window conditions.
- Reviewed key considerations for ensuring efficient and effective sliding window implementations.

## Additional Resources
- [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=two-pointers)


