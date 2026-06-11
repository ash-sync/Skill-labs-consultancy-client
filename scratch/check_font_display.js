import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const fontDisplayMatches = html.match(/font-display\s*:\s*\w+/gi);
console.log('font-display occurrences:', fontDisplayMatches);

const preloadMatches = html.match(/<link rel="preload" href="\/assets\/geist-latin-wght-normal-[^"]+".*?>/g);
console.log('Preload link matches:', preloadMatches);
