const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let matches = [];
let lineIndex = 0;

rl.on('line', (line) => {
  lineIndex++;
  if (line.includes('MERLIN SIMO') && line.includes('Design System & Styles')) {
    matches.push({ lineIndex, length: line.length });
  }
});

rl.on('close', () => {
  console.log('Matches:', JSON.stringify(matches));
});
