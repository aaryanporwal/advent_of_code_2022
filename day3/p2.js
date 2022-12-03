const fs = require('fs');

const LETTERS_ARR = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const bagContents = fs.readFileSync('./input.txt', 'utf8', 'r').split(/\r?\n/);

const groups = []

for (let i=0; i<bagContents.length - 2; i += 3) {
    let newGroup = [bagContents[i], bagContents[i+1], bagContents[i+2]];
    groups.push(newGroup)
}

let prioritySum = 0;

groups.forEach(group => {
    let badges = new Set();
    for (let i=0; i<group[0].length; i++) {
        let item = group[0].charAt(i);
        if(group[1].includes(item) && group[2].includes(item)) {
            badges.add(item);
        }
    }
    const [badge] = badges
    // console.log(badge)
    prioritySum += badge.toUpperCase() === badge ? LETTERS_ARR.indexOf(badge.toLowerCase()) + 27 : LETTERS_ARR.indexOf(badge) + 1;
})

console.log(prioritySum)
