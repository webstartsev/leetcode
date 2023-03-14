const MINUTES_IN_DAY = 24 * 60;
const MINUTES_IN_HOUR = 60;

const diferenceInTime = (str) => {
  const times = str.split(" ");

  const result = [];
  for (let i = 0; i < times.length; i++) {
    const arrTime = times[i].split(":");
    result.push(Number(arrTime[0] * MINUTES_IN_HOUR) + Number(arrTime[1]));
  }

  result.sort((a, b) => a - b);

  let minTime = MINUTES_IN_DAY - result[result.length - 1] + result[0];
  for (let i = 1; i < times.length; i++) {
    minTime = Math.min(minTime, result[i] - result[i - 1]);
  }

  return minTime;
};

const fs = require("fs");
let fileContent = fs.readFileSync("input.txt", "utf8");

const content = fileContent.toString();
const result = diferenceInTime(content.split("\n")[1]);

fs.writeFileSync("output.txt", result.toString());

console.log(diferenceInTime("00:00 22:00 18:00 23:59"));
console.log(diferenceInTime("00:00 23:59 00:00"));
console.log(diferenceInTime("00:00"));
console.log(diferenceInTime(""));

console.log(diferenceInTime("00:00 00:00 01:00 22:00 00:00 02:00"));
console.log(diferenceInTime("00:00 23:59 00:00"));
console.log(diferenceInTime("00:00 23:59 00:00"));
