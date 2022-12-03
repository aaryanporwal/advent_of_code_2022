const fs = require("fs");
const file = fs.readFileSync("input.txt", "utf8").split("\n");

// can do the below with charCodeAt(0), i.e ascii method

const lettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let total_sum = 0;

file.forEach((line) => {
  a = line.length;
  comp1 = line.slice(0, a / 2);
  comp2 = line.slice(a / 2, a);

  let commonChars = new Set();

  for (let i = 0; i < comp1.length; i++) {
    if (comp2.includes(comp1[i])) {
      commonChars.add(comp1[i]);
    }
  }

  commonChars.forEach((e) => {
    if (e === e.toUpperCase()) {
      // e is upper case, add 27 to it
      total_sum += lettersArray.indexOf(e.toLowerCase()) + 27;
    } else {
      total_sum += lettersArray.indexOf(e) + 1;
    }
  });

});

console.log(total_sum);
