// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const symbolBeloyMap = {
    I: ["V", "X"],
    X: ["L", "C"],
    C: ["D", "M"],
  };

  const symbolToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (i = 0; i < s.length; i++) {
    if (symbolBeloyMap[s[i]]?.includes(s[i + 1])) {
      sum += symbolToIntMap[s[i + 1]] - symbolToIntMap[s[i]];
      i++;
    } else {
      sum += symbolToIntMap[s[i]];
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
