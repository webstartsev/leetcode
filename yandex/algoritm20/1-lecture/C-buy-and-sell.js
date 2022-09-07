const buyAndSell = (str) => {
  const prices = str.split(" ").map((item) => Number(item));
  let bank = 1;

  let minPosition = -1;
  let maxPosition = -1;

  const profit = {};

  for (let i = 0; i < prices.length; i++) {
    if (
      prices[i] <= bank &&
      (prices[i] < prices[minPosition] || !prices[minPosition])
    ) {
      minPosition = i;
    } else if (prices[i] > prices[minPosition]) {
      maxPosition = i;
    }

    if (minPosition !== maxPosition && minPosition < maxPosition) {
      const maxProfit = prices[maxPosition] - prices[minPosition];
      profit[maxProfit] = [minPosition, maxPosition];
    }
  }

  const bestDaysForOffer = profit[Object.keys(profit).pop()];
  if (!bestDaysForOffer) {
    return "0 0";
  }

  return `${bestDaysForOffer[0] + 1} ${bestDaysForOffer[1] + 1}`;
};

console.log(buyAndSell("501 1000 2000 502 600")); // 2 5
console.log(buyAndSell("10 3 5 3 11 9")); // 2 5
console.log(buyAndSell("5 5 5 5")); // 0 0
console.log(buyAndSell("5 5 5 4")); // 0 0
console.log(buyAndSell("5")); // 0 0
console.log(buyAndSell("1 2")); // 1 2
console.log(buyAndSell("4 5 1 1")); // 1 2
console.log(buyAndSell("4 10 1 2")); // 1 2
console.log(buyAndSell("4 5 1 2")); // 3 4
console.log(buyAndSell("1 2 3 4")); // 1 4
console.log(buyAndSell("5 5 5 5")); // 0 0
console.log(buyAndSell("5 4 3 2 1")); // 0 0
console.log(buyAndSell("1 10 5 3")); // 1 2
console.log(buyAndSell("1 10 2 15")); // 1 4
console.log(buyAndSell("1 10 2 5")); // 1 2
console.log(buyAndSell("5")); // 0 0
console.log(buyAndSell("1000 1001")); // 1 2
console.log(buyAndSell("1500 2000 4001")); // 0 0
console.log(buyAndSell("1500 2000 4001 500 2000 100 5")); // 4 5
console.log(buyAndSell("1 10 8 1 10 8 100 1 1 3 2 4 1")); // 1 7
