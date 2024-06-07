const fs = require('fs');
const readline = require('readline');

const wordsArray = [];
async function processLineByLine() {
  const fileStream = fs.createReadStream('deutsch.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    wordsArray.push(line.toUpperCase());
  }
  fs.writeFile('wordsArray_bak.ts', JSON.stringify(wordsArray), 'utf8', err => {if(err) console.log(err)});
  const targetWords = wordsArray.filter((word) => word.length >= 7 && Array.from(new Set(word.split(''))).length === 7);
  fs.writeFile('targetWords_bak.ts', JSON.stringify(targetWords), 'utf8', err => {if(err) console.log(err)});
}

processLineByLine().then();

