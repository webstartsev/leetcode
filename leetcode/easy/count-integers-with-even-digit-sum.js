// https://leetcode.com/problems/count-integers-with-even-digit-sum/

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (digitsSum(i) % 2 === 0) count++;
  }
  return count;
};

function digitsSum(num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// console.log(countEven([4]));
// console.log(countEven([30]));

console.log(digitsSum(13));
