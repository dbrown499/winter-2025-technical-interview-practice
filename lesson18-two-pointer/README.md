# Lesson 18: Two Pointers

## Warm-up (10 minutes)

Check out the warmup.js.

## Written Question (5 minutes)

How could you reverse an array in place in n/2 time? Would this be linear or quadratic time?

To reverse an array in place in O(n/2) time, you would use two pointers: one at the beginning and one at the end of the array. Swap the elements at these pointers and move the pointers toward each other until they meet in the middle.

## Lecture Content (20 minutes)

### Introduction to Two Pointers:

#### What is the Two-Pointer Technique?

- A method used to solve problems involving arrays or linked lists where elements need to be compared in some way, typically to find pairs, compress data, or reverse structures.

#### Types of Two-Pointer Techniques:

- Opposite Direction: Start pointers at opposite ends (e.g., one at the beginning and one at the end of an array) and move them towards each other.
- Same Direction: Both pointers start at the same position and move in the same direction but at different speeds or with different conditions.

#### Advantages:

- Reduces time complexity from O(n²) to O(n) in many cases.
- Decreases the need for additional memory, making it an in-place algorithm.

#### Common Use Cases:

- Pair with a given sum in a sorted array.
- Finding duplicates in an array with all consecutive elements.
- Reversing an array or a linked list.

## Problem Solving (35 minutes)

## Recap (15 minutes)

## Additional Resources

- https://www.youtube.com/shorts/x9rZHfGCdng
- https://www.youtube.com/shorts/lQLpJyRFCX8
