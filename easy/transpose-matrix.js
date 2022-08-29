// https://leetcode.com/problems/transpose-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const transposeMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      Array.isArray(transposeMatrix[j])
        ? transposeMatrix[j].push(matrix[i][j])
        : (transposeMatrix[j] = [matrix[i][j]]);
    }
  }

  return transposeMatrix;
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
