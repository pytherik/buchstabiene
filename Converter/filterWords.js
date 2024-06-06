import { words } from "./deutsch.js";
const fs = require('fs');

const targetWords = words.filter((word) => word.length >= 7 && Array.from(new Set(word.split(''))).length === 7);
console.log(targetWords.slice(1,20));
console.log(targetWords.length);


fs.writeFile('targetWords.json', JSON.stringify(targetWords), 'utf8', err => {if(err) console.log(err)});

processLineByLine().then();