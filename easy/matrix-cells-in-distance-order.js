// https://leetcode.com/problems/matrix-cells-in-distance-order/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const result = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result.push([i, j]);
    }
  }

  result.sort((a, b) => {
    const aDiff = Math.abs(rCenter - a[0]) + Math.abs(cCenter - a[1]);
    const bDiff = Math.abs(rCenter - b[0]) + Math.abs(cCenter - b[1]);
    return aDiff - bDiff;
  });

  return result;
};

console.log(allCellsDistOrder(1, 2, 0, 0));
console.log(allCellsDistOrder(2, 2, 0, 1));
console.log(allCellsDistOrder(2, 3, 1, 2));
