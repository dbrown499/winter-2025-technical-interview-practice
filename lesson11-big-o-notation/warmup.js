// Prompt 1: Find if an item is repeated in an array. Given an array of integers, find if an integer appears more than once in the array.
const hasDuplicate = (nums) => {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        if (hashMap.has(nums[i])) {
            return true;
        } else {
            hashMap.set(nums[i], [i]);
        }
    }

    return false;
};

// console.log(hasDuplicate([1, 2, 3, 4, 3, 2, 1, 2, 3, 2, 1, 3, 4]));

// Prompt 2: Count occurrences of a letter from one string in another string. Given two strings, find the number of times a letter from the first string appears in the second string.
const countLetterOccurrences = (str1, str2) => {
    let hashMap = new Map();
    let acc = 0;

    for (let i = 0; i < str1.length; i++) {
        hashMap.set(str1[i], 0);
    }

    for (let i = 0; i < str2.length; i++) {
        if (hashMap.has(str2[i])) {
            hashMap.set(str2[i], hashMap.get(str2[i]) + 1);
        }
    }

    hashMap.forEach((value) => {
        acc += value;
    });

    return acc;
};

// console.log(countLetterOccurrences("abc", "abcaabc")); // Expected output: 7 (a appears 3 times, b appears 2 times, c appears 2 times)
// console.log(countLetterOccurrences("xyz", "abcabc")); // Expected output: 0 (None of 'x', 'y', 'z' appear in str2)



// Prompt 3: Find the maximum difference between two elements in an array. Given an array of integers, find the maximum difference between any two elements in the array.
const maxDifference = (nums) => {
    let sortedArr = nums.sort((a,b)=> a - b);

    return sortedArr[sortedArr.length - 1] - sortedArr[0]
 };

 //0R

//  const maxDifference = (nums) => {
//     let min = Infinity;
//     let max = -Infinity;

//     for (let num of nums) {
//         if (num < min) min = num;
//         if (num > max) max = num;
//     }

//     return max - min;
// };

console.log(maxDifference([1, 2, 3, 4, 5]));  // Expected output: 4 (5 - 1)
console.log(maxDifference([-1, -3, 2, 5, 0]));  // Expected output: 8 (5 - (-3))

