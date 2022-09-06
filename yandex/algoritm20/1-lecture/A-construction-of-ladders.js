const builder = (n) => {
  const ladders = [];
  let max = 0;
  while (true) {
    max += 1;
    if (n - max >= 0) {
      ladders.push(max);
      n -= max;
    } else {
      return ladders.length;
    }
  }
};

console.log(builder(1));
console.log(builder(5));
console.log(builder(8));
console.log(builder(15));
console.log(builder(12147483648));
