// https://leetcode.com/problems/ugly-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  for (num of [2, 3, 5]) {
    while (n && n % num === 0) {
      n /= num;
    }
  }
  return n === 1;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
console.log(isUgly(8));
