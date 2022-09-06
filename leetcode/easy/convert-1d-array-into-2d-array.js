// https://leetcode.com/problems/convert-1d-array-into-2d-array/

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (n * m !== original.length) {
    return [];
  }

  const result = [];
  for (let i = 0; i < original.length; i += n) {
    result.push(original.slice(i, i + n));
  }

  return result;
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1,2],[3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
console.log(construct2DArray([1], 1, 1)); // [[1]]
