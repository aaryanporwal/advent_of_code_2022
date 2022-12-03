//  read input.txt and print the result
const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split("\n");
console.log(lines);

/**
  Points for win -> 6
  Points for draw -> 3
  Points for loss -> 0
  A -> Rock (1)       X -> Rock (1)
  B -> Paper (2)      Y -> Paper (2)
  C -> Scissors (3)   Z -> Scissors (3)
  Rock beats Scissors
  Paper beats Rock
  Scissors beats Paper
  A Y -> wins -> 2+6 = 8 
  B X -> loss -> 1+0 = 1
  C Z -> draw -> 3+3 = 6
 */

const scoreReferences = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
}

let result = 0;

lines.forEach((line) => {
  result+=scoreReferences[line]
})

console.log(result)
