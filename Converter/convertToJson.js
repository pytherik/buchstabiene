const fs = require('fs');
const readline = require('readline');

const wordsArray = [];
async function processLineByLine() {
  const fileStream = fs.createReadStream('openthesaurus.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    const word = line.toUpperCase();
    if (Array.from(new Set(word)).length < 8) wordsArray.push(word);
  }
  fs.writeFile('tesaurus.ts', JSON.stringify(wordsArray), 'utf8', err => {if(err) console.log(err)});
  const targetWords = wordsArray.filter((word) => word.length >= 7 && Array.from(new Set(word.split(''))).length === 7);
  fs.writeFile('targetWordsTesaurus.ts', JSON.stringify(targetWords), 'utf8', err => {if(err) console.log(err)});
}

processLineByLine().then();

