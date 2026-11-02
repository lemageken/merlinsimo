const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Merlin/.gemini/antigravity/brain/d8ac7886-f84d-4592-98e9-f369420c4af2/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let found = false;
rl.on('line', (line) => {
  if (line.includes('"boutique.html"') && line.includes('write_file') && !found) {
    const obj = JSON.parse(line);
    const toolCall = obj.tool_calls.find(tc => tc.args && tc.args.Path && tc.args.Path.includes('boutique.html'));
    if (toolCall) {
      console.log('Found initial boutique.html, length:', toolCall.args.Content.length);
      fs.writeFileSync('d:/ANTIGRAVITY/projets/site-genie/site/scripts/original_boutique.html', toolCall.args.Content, 'utf8');
      found = true;
    }
  }
});

rl.on('close', () => {
  console.log('Done searching for boutique.html. Found:', found);
});
