// https://leetcode.com/problems/binary-gap/

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const binary = n.toString(2);
  let startPosition = 0;
  let maxLength = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      const distance = i - startPosition;
      startPosition = i;
      maxLength = Math.max(maxLength, distance);
    }
  }

  return maxLength;
};
