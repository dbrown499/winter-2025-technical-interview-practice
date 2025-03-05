// 1. Given an array of integers return the largest number
function findLargestNumber(arr) {
    return Math.max(...arr);
  }
  
//   console.log(findLargestNumber([1, 5, 3, 9, 2]));  // Output: 9
//   console.log(findLargestNumber([-1, -5, -3, -9, -2]));  // Output: -1
  
// 2. Given an array of integers return the largest sum for two consecutive numbers

function largestConsecutiveSum(arr) {
    let left = 0;
    let right = 1;
    let maxSum = -Infinity;
  
    while (right < arr.length) {
      const sum = arr[left] + arr[right];
      maxSum = Math.max(maxSum, sum);
      
      left++;
      right++;
    }
  
    return maxSum;
  }
  
//   console.log(largestConsecutiveSum([20, 17, 25]));  // Output: 42