const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/Merlin/.gemini/antigravity/brain/9cbd7414-563e-4243-a576-2959d835e0fb/.system_generated/logs/transcript_full.jsonl'),
  crlfDelay: Infinity
});

let found = false;
rl.on('line', (line) => {
  if (line.includes('write_file') && line.includes('style.css')) {
    const obj = JSON.parse(line);
    const toolCall = obj.tool_calls.find(tc => tc.args && tc.args.Path && tc.args.Path.includes('style.css'));
    if (toolCall) {
      console.log('Found tool call for style.css, content length:', toolCall.args.Content.length);
      fs.writeFileSync('d:/ANTIGRAVITY/projets/site-genie/site/scripts/original_style.css', toolCall.args.Content, 'utf8');
      found = true;
    }
  }
});

rl.on('close', () => {
  console.log('Done searching subagent log. Found:', found);
});
