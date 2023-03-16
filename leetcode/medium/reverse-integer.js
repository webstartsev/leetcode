https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isMinus = x < 0 ? true : false;
    let num = Math.abs(x).toString().split('').reverse().join('');

    return isMinus ? -Math.abs(num) : Math.abs(num);
};

/*
123
-123
120
 */