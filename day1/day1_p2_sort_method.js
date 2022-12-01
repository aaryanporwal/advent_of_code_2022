/*
  Part 2 with sorting, slower than nosort
*/

const fs = require("fs");
const inputArr = fs.readFileSync("input.txt", "utf8", "r").split("\n");

let sumArr = [];

let temp_sum = 0;
inputArr.forEach((val) => {
  if (val === "") {
    sumArr.push(temp_sum);
    temp_sum = 0;
  } else {
    temp_sum += parseInt(val);
  }
});

const sortedSums = sumArr.sort((a, b) => {
  return b - a;
});

const result = sortedSums[0] + sortedSums[1] + sortedSums[2];

console.log(result);
