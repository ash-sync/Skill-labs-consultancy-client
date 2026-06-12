import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const head = html.match(/<head>([\s\S]*?)<\/head>/i);
if (head) {
  console.log(head[1].trim());
} else {
  console.log('Head not found!');
}
