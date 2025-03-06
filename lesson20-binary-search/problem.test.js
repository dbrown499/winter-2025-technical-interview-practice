const binarySearch = require("./problem");

test("Returns correct index for [1, 3, 5, 7, 9, 11] and target 5", () => {
  expect(binarySearch([1, 3, 5, 7, 9, 11], 5)).toEqual(2);
});

test("Returns correct index for [2, 4, 6, 8, 10] and target 7", () => {
  expect(binarySearch([2, 4, 6, 8, 10], 7)).toEqual(-1);
});

test("Returns correct index for [-10, -3, 0, 1, 4, 7, 12] and target 1", () => {
  expect(binarySearch([-10, -3, 0, 1, 4, 7, 12], 1)).toEqual(3);
});

test("Returns correct index for [1, 2, 3, 4, 5] and target 5", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
});
