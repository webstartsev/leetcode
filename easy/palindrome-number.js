// https://leetcode.com/problems/palindrome-number/

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function (x) {
  const arrNums = x.toString().split("");

  for (let i = 0; i <= arrNums.length / 2; i++) {
    if (arrNums[i] !== arrNums[arrNums.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
