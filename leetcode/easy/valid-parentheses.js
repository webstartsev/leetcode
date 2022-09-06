// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  const openSet = new Set(["(", "{", "["]);
  const hashCloseBrakets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openSet.has(s[i])) {
      stack.push(s[i]);
    } else {
      const lastSymbol = stack.pop();
      if (lastSymbol !== hashCloseBrakets[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("((")); // false
console.log(isValid("[")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
