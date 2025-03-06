/**
 * Minimized Maximum of Products Distributed to Any Store
 *
 * Given n products with their quantities and m stores, your task is to distribute
 * all the products among the m stores such that the maximum number of any product
 * assigned to any store is minimized.
 *
 * Write a function that returns the minimized maximum number of products that any
 * store ends up with.
 *
 * Function Signature:
 * function minimizedMaximum(n: number, m: number, quantities: number[]): number
 *
 * Parameters:
 * n - the number of products.
 * m - the number of stores.
 * quantities - an array of integers where each integer represents the quantity of
 *              one product.
 *
 * Returns:
 * The minimum possible value of the maximum number of products any store ends up with.
 *
 * Examples:
 *
 * Example 1:
 * Input: n = 7, m = 3, quantities = [10, 5, 8, 7, 4, 2, 6]
 * Output: 10
 * Explanation:
 * One way to distribute the products such that the maximum number of any product
 * a store gets is minimized is as follows:
 * Store 1: 10, 2   -> Total: 12
 * Store 2: 8, 4    -> Total: 12
 * Store 3: 7, 6, 5 -> Total: 18
 * Here, the maximum products any store gets is 18. However, the distribution can be
 * optimized to ensure that the maximum number any store gets is only 10.
 *
 * Example 2:
 * Input: n = 5, m = 5, quantities = [10, 10, 10, 10, 10]
 * Output: 10
 * Explanation:
 * Each store gets exactly one type of product with the full quantity since there
 * are as many stores as there are products.
 *
 * Example 3:
 * Input: n = 3, m = 2, quantities = [7, 9, 5]
 * Output: 9
 * Explanation:
 * One possible distribution:
 * Store 1: 9
 * Store 2: 7, 5
 * This minimizes the maximum number to 12. But with optimization, we find that the
 * minimized maximum number is 9.
 *
 * Constraints:
 * 1 <= n <= 10^5
 * 1 <= m <= 10^5
 * 1 <= quantities[i] <= 10^5
 */


function minimizedMaximum(n, m, quantities) {
  let left = 1, right = Math.max(...quantities);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let storesNeeded = 0;

    // Calculate the total number of stores required if no store gets more than `mid` products
    for (let qty of quantities) {
      storesNeeded += Math.ceil(qty / mid); // The number of stores needed for this product
      if (storesNeeded > m) {
        break; // No need to continue if we've already exceeded the store limit
      }
    }

    if (storesNeeded <= m) {
      right = mid; // If we can distribute the products with `mid`, try a smaller max value
    } else {
      left = mid + 1; // If not, we need to increase the max value
    }
  }

  return left; // After the binary search loop, left will be the minimized max value
}

// console.log(minimizedMaximum(7, 3, [10, 5, 8, 7, 4, 2, 6])); // Output: 10
// console.log(minimizedMaximum(5, 5, [10, 10, 10, 10, 10])); // Output: 10
// console.log(minimizedMaximum(3, 2, [7, 9, 5])); // Output: 9

module.exports = minimizedMaximum;
