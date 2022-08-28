/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let pretindent = strs.shift();

  for (let i = 0; i < strs.length; i++) {
    if (!strs[i]) {
      return "";
    }
    for (let j = 0; j < strs[i].length; j++) {
      if (pretindent[j] !== strs[i][j]) {
        pretindent = pretindent.slice(0, j);
        break;
      }

      if (j === strs[i].length - 1) {
        pretindent = strs[i];
      }
    }
  }

  return pretindent;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["abc", "a"]));
console.log(longestCommonPrefix(["abab", "aba", ""]));
