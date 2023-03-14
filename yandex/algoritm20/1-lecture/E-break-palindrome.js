const breakPalindrome = (str) => {
  let result = "";
  if (str.length === 1 || str.length === 0) {
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      continue;
    }

    const code = str[i].charCodeAt(0) - 1;
    const newSymbol = String.fromCharCode(code);
    str = insertSymbol(str, newSymbol, i);

    if (!isPolindrom(str)) {
      result = str;
      break;
    }
  }

  return result;
};

const insertSymbol = (str, symbol, pos) => {
  const arrString = str.split("");
  arrString.splice(pos, 1, symbol);

  return arrString.join("");
};

const isPolindrom = (str) => {
  let flag = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      flag = false;
    }
  }

  return flag;
};

console.log(breakPalindrome("abba"));
console.log(breakPalindrome("aaaaaa"));
console.log(breakPalindrome("vf"));
console.log(breakPalindrome("abccba"));
console.log(breakPalindrome("dcbcd"));
console.log(breakPalindrome("zzz"));

// console.log(isPolindrom("abba"));
// console.log(isPolindrom("aa"));

// String.fromCharCode(int);
// charCodeAt();
