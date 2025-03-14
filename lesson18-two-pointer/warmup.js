// Use javascript methods to solve the following problems

// Find the maximum number in an array
let numbers1 = [5, 10, 2, 8, 3];
function findMax(arr) {
  let left = 0;
  let right = numbers1.length - 1;
  let maxNum = 0;

  while (left < right) {
      if(arr[left] > arr[right]){
        maxNum = arr[left];
      }else{
        maxNum = arr[right];
      }
      left++;
      right--
  }
  return maxNum;

}
// console.log(findMax(numbers1)); // Output: 10

// Remove all instances of a specific value from an array
let numbers2 = [1, 2, 3, 4, 5, 3, 6];
// My answer 
function removeValue(arr, value){
  return arr.filter(item => item !== value);
}
// Two pointer answer
function removeValue(arr, value){
  let right = 0; 
  
  for (let left = 0; left < arr.length; left++) {
    if (arr[left] !== value) {
      arr[right] = arr[left]; 
      right++;
    }
  }

  arr.length = right;

  return arr;
}

// console.log(removeValue(numbers2, 3)); // Output: [1, 2, 4, 5, 6]

// Create a new array from an object that contains only the values that are even numbers.
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// My answer 
function getEvenValues(obj) {
  return Object.values(obj).filter(value => value % 2 === 0);
 }

 // Two pointer answer
 function getEvenValues(obj) {
  const values = Object.values(obj);
  let right = 0;

  for (let left = 0; left < values.length; left++) {
    if (values[left] % 2 === 0) {
      values[right] = values[left]; 
      right++;
    }
  }

  return values.slice(0, right);
}


// console.log(getEvenValues(obj));
