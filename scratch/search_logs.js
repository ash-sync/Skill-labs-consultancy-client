import fs from 'fs';
import readline from 'readline';

async function search() {
  const fileStream = fs.createReadStream('C:\\Users\\provident technology\\.gemini\\antigravity\\brain\\6394a300-7517-4b81-952f-8a0df0bb06ba\\.system_generated\\logs\\transcript.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineCount = 0;
  for await (const line of rl) {
    lineCount++;
    if (line.toLowerCase().includes('reflow') || line.toLowerCase().includes('layout') || line.toLowerCase().includes('datepicker')) {
      console.log(`Line ${lineCount}: ${line.slice(0, 300)}...`);
    }
  }
}

search();
