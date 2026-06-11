import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('dist/index.html', 'utf8');
const regex = /[^"'()]*woff2[^"'()]*/g;
const matches = html.match(regex);
console.log('Matches:', matches);
