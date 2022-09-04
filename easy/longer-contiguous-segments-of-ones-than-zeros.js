// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const lengthOne = new Set(s.split("0"));
  const lengthZero = new Set(s.split("1"));
  console.log("lengthOne", lengthOne);
  console.log("lengthZero", lengthZero);

  console.log("...lengthOne", [...lengthOne]);

  const maxOne = Math.max(...Array.from(lengthOne).map((item) => item.length));
  const maxZero = Math.max(
    ...Array.from(lengthZero).map((item) => item.length)
  );

  console.log("maxOne", maxOne);
  console.log("maxZero", maxZero);

  return maxOne > maxZero;
};

// console.log(checkZeroOnes(""));
// console.log(checkZeroOnes("111111"));
// console.log(checkZeroOnes("000000"));
console.log(checkZeroOnes("1101"));
// console.log(checkZeroOnes("111000"));
// console.log(checkZeroOnes("110100010"));
