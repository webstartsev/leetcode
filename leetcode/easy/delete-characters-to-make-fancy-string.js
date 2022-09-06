// https://leetcode.com/problems/delete-characters-to-make-fancy-string/

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  return s.replace(/(.)\1{2,}/g, "$1$1");
};

// \1 - это обратная ссылка на то, что было найдено в скобках (.)
// То есть, он ищет любой символ, а потом пытается понять продублирован ли он или нет.
