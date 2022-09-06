const buyAndSell = (str) => {
  const prices = str.split(" ").map((item) => Number(item));
  let prevMinPosition = 0;
  let prevMaxPosition = 0;

  let minPosition = 0;
  let maxPosition = 0;

  let findNew = false;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[minPosition]) {
      //   if (findNew) {
      //     prevMinPosition = minPosition;
      //     prevMaxPosition = maxPosition;
      //   }

      minPosition = i;
      maxPosition = i;
      findNew = true;
    }
  }

  for (let i = minPosition; i < prices.length; i++) {
    if (prices[i] > prices[maxPosition]) {
      maxPosition = i;
    }
  }

  if (minPosition === maxPosition) {
    return "0 0";
  }

  return `${minPosition + 1} ${maxPosition + 1}`;
};

// console.log(buyAndSell("10 3 5 3 11 9"));
// console.log(buyAndSell("5 5 5 5"));
// console.log(buyAndSell("5 5 5 4"));
// console.log(buyAndSell("5"));
// console.log(buyAndSell("1 2"));

console.log(buyAndSell("4 5 1 1")); // 1 2
