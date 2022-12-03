const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8");
const lines = input.split("\n");

/**
  Points for win -> 6
  Points for draw -> 3
  Points for loss -> 0
  A -> Rock (1)       X -> Lose (1)
  B -> Paper (2)      Y -> Draw (2)
  C -> Scissors (3)   Z -> Win (3)
  Rock beats Scissors
  Paper beats Rock
  Scissors beats Paper
  A Y -> wins -> 2+6 = 8
  B X -> loss -> 1+0 = 1
  C Z -> draw -> 3+3 = 6
 */

const winRefs = {
  A: "B",
  B: "C",
  C: "A",
};

const loseRefs = {
  A: "C",
  B: "A",
  C: "B",
};

const shapeScore = {
  A: 1,
  B: 2,
  C: 3,
};

let result = 0;
lines.forEach((line) => {
  let myMove;
  switch (line[2]) {
    case "X":
      myMove = loseRefs[line[0]];
      oppMove = line[0];
      result += shapeScore[myMove];
      break;
    case "Y":
      myMove = line[0];
      result += shapeScore[myMove] + 3;
      break;
    case "Z":
      myMove = winRefs[line[0]];
      result += shapeScore[myMove] + 6;
      break;
    default:
      break;
  }
});

console.log(result);
