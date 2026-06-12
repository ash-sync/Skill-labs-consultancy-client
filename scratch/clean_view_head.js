import fs from 'fs';

let html = fs.readFileSync('dist/index.html', 'utf8');
// Remove style tag
html = html.replace(/<style>[\s\S]*?<\/style>/i, '<style>[INLINED CSS TEMPORARILY HIDDEN]</style>');

const head = html.match(/<head>([\s\S]*?)<\/head>/i);
if (head) {
  console.log(head[1].trim());
} else {
  console.log('Head not found!');
}
