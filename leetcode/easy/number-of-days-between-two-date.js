// https://leetcode.com/problems/number-of-days-between-two-dates/

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  const timestamp1 = new Date(date1);
  const timestamp2 = new Date(date2);
  const milisecondInaDay = 24 * 60 * 60 * 1000;

  return (
    (timestamp1 > timestamp2
      ? timestamp1 - timestamp2
      : timestamp2 - timestamp1) / milisecondInaDay
  );
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"));
console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
