"use strict";
// In terminal run code with node warmup.js. If there are any errors, debug them.

function buggyCode() {
  function innerFunction() {
    let x = 15;
    let y = 5;
    console.log(x + y);
  }

  innerFunction();
}

// buggyCode();

function sumArrayOfNumbers(a) {
  let sum = 0;
  for (let ele of a) {
    sum += parseInt(ele);
  }
  return sum;
}

// console.log(sumArrayOfNumbers(["1", "2", "3", "4", "5"]));

function incorrectScope() {
  if (true) {
    var x = 10;  // 'var' has function scope, so it's accessible outside the block
  }
  
  console.log(x);  // x is accessible here due to 'var' being function-scoped, not block-scoped
}

incorrectScope();  // Output: 10
