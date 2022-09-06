// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const x = nums.length;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % x]) {
      count += 1;
    }
  }

  return count <= 1;
};

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));
