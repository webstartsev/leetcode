// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const pricesWithDiscoint = [];
  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];
    for (let j = i; j < prices.length; j++) {
      const currSale = prices[j];
      if (i === j) {
        continue;
      }

      if (currPrice >= currSale) {
        pricesWithDiscoint.push(currPrice - currSale);
        break;
      }

      if (j === prices.length - 1) {
        pricesWithDiscoint.push(currPrice);
      }
    }

    if (i === prices.length - 1) {
      pricesWithDiscoint.push(currPrice);
    }
  }

  return pricesWithDiscoint;
};
