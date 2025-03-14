// Using array methods such as reduce(), map(), or filter(), solve these problems: 

// 1. Given a sorted array, return the largest sum between two numbers.
function largestSumSorted(arr) {
    return arr.length < 2 ? null : arr.slice(-2).reduce((sum, num) => sum + num, 0);
    }
  
  console.log(largestSumSorted([1, 2, 3, 4, 5])); // Output: 9 (4 + 5)
  console.log(largestSumSorted([10, 20, 30, 40])); // Output: 70 (30 + 40)
  console.log(largestSumSorted([5])); // Output: null (not enough numbers)
  