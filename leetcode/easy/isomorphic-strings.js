/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const hashMap = {};
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const x = s[i];
    const y = t[i];

    if (hashMap[x]) {
      if (hashMap[x] !== y) {
        return false;
      }
    } else {
      if (set.has(y)) {
        return false;
      }

      hashMap[x] = y;
      set.add(y);
    }
  }

  return true;
};
