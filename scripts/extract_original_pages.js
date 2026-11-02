const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let lineNum = 0;
const targets = [64, 66, 68, 70, 72];

rl.on('line', (line) => {
  lineNum++;
  if (targets.includes(lineNum)) {
    try {
      const obj = JSON.parse(line);
      if (obj.tool_calls && obj.tool_calls.length > 0) {
        const tc = obj.tool_calls[0];
        const filePath = tc.args.Path;
        const baseName = require('path').basename(filePath);
        fs.writeFileSync('d:/ANTIGRAVITY/projets/site-genie/site/scripts/orig_' + baseName, tc.args.Content, 'utf8');
        console.log(`Saved original ${baseName}`);
      }
    } catch (e) {
      console.error(`Error on line ${lineNum}:`, e.message);
    }
  }
});

rl.on('close', () => {
  console.log('Extraction of original main pages done!');
});
