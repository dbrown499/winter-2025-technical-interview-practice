# Lesson #: Sliding Scale (Problem Solving Methodology)

## Warm-up (10 minutes)

Quick review: What methods do you use to iterate through arrays in JavaScript? Take a moment to write down: for loop, forEach, map, and filter.

Write a basic for loop that sums numbers in an array.

## Written Question (5 minutes)

What's wrong with this code for finding a subarray sum?
The function is only looking at the cumulative sums of elements up to a certain point in an array instead of calculating the sum of each subarray individually. Plus, target is not defined.

```javascript
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === target) return true;
  }
  return false;
}
```

## Lecture Content (20 minutes)

Sliding Window is a technique to solve array/string problems with contiguous elements. Instead of re-computing overlapping subarrays, we maintain a "window" that slides through the data.

Key concepts:

1. Window boundaries (start, end)
2. Window state (sum, count, etc.)
3. Window movement rules

Example: Find max sum of 3 consecutive elements

```javascript
function maxSum(arr, k) {
  let windowSum = 0;

  // Initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Slide window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
```

## Problem Solving (35 minutes)

Practice problems:

1. Find longest substring without repeating characters
2. Find smallest subarray with sum ≥ target
3. Calculate moving average of last N numbers

Let's solve #1 together:

```javascript
function longestSubstring(str) {
  let seen = new Map();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    if (seen.has(str[end])) {
      start = Math.max(start, seen.get(str[end]) + 1);
    }
    seen.set(str[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

## Recap (15 minutes)

- Sliding Window optimizes subarray operations
- Key: maintain window state while sliding
- Common problems: subarray sums, substring patterns
- Time complexity usually O(n)

## Additional Resources

- [Sliding Window Algorithm - Variable Length + Fixed Length](https://www.youtube.com/watch?v=GaXwHThEgGk)
- [Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/description/?envType=problem-list-v2&envId=two-pointers)
