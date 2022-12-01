/**
 *  Part 1 with readline
 *  Slower than nosort
 *  Time Complexity: O(nlogn)
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("input.txt"),
  crlfDelay: Infinity,
});

let max_sum = 0;
let temp_sum = 0;

rl.on("line", (line) => {
  if (line === "") {
    max_sum = Math.max(max_sum, temp_sum);
    temp_sum = 0;
  } else {
    temp_sum += parseInt(line);
  }
});

rl.on("close", () => {
  console.log(max_sum);
});
