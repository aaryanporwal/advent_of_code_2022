const fs = require("fs");

const fileContents = fs.readFileSync("input.txt", "utf8", "r").split(/\r?\n/);

const contentsArr = fileContents.map((pair) => {
  return pair.split(/-|,/g);
});

let overlappingPairs = 0;
contentsArr.forEach((pair) => {
  pair.forEach((str, i, arr) => {
    arr[i] = parseInt(str);
  });

  if (pair[2] >= pair[0] && pair[2] <= pair[1]) {
    overlappingPairs++;
  } else if (pair[0] >= pair[2] && pair[0] <= pair[3]) {
    overlappingPairs++;
  }
});

console.log(overlappingPairs);
