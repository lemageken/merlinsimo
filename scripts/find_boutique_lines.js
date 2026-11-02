const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let lines = [];
let lineNum = 0;
rl.on('line', (line) => {
  lineNum++;
  if (line.includes('boutique.html') && line.includes('write_file')) {
    lines.push({ lineNum, length: line.length });
  }
});

rl.on('close', () => {
  console.log('Matches:', lines);
});
