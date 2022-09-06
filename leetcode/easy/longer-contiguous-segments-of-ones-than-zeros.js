// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const setOne = new Set(s.split("0"));
  const setZero = new Set(s.split("1"));

  const maxOne = getMax(setOne);
  const maxZero = getMax(setZero);

  return maxOne > maxZero;
};

function getMax(set) {
  return Math.max(...Array.from(set).map((item) => item.length));
}

// console.log(checkZeroOnes(""));
// console.log(checkZeroOnes("111111"));
// console.log(checkZeroOnes("000000"));
console.log(checkZeroOnes("1101"));
// console.log(checkZeroOnes("111000"));
// console.log(checkZeroOnes("110100010"));
