// 1. Given an array create a function that returns the element at the center of the array;
function getCenterElement(arr) {
    const midIndex = Math.floor(arr.length / 2);
    return arr[midIndex];
}

console.log(getCenterElement([1, 2, 3, 4]));  // Output: 2
console.log(getCenterElement([1, 2, 3, 4, 5]));  // Output: 3


// 2. Given an array of integers return true if the array is sorted otherwise return false;

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
//   console.log(isSorted([1, 5, 8, 9, 11]));  // Output: true
//   console.log(isSorted([1, 2, 3, 0]));  // Output: false
  

// 3. Given an array and a value return the index where that value can be found. Otherwise, return -1.

function findIndex(arr, value) {
    return arr.indexOf(value) ? arr.indexOf(value) : -1;
  }
  
//   console.log(findIndex([1, 2, 3, 4, 5], 3));  // Output: 2
//   console.log(findIndex(["yellow", "blue", "green"], "purple"));  // Output: -1
