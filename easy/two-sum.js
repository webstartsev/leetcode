// https://leetcode.com/problems/two-sum/

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  const res = {};
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (res[current] >= 0) {
      return [res[current], i];
    }
    res[target - current] = i;
  }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
