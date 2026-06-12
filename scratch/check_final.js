import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');

console.log('--- Font Display ---');
const fontDisplayMatches = html.match(/font-display\s*:\s*\w+/gi);
console.log('font-display:', fontDisplayMatches);

console.log('\n--- Preload Font ---');
const preloadFontMatches = html.match(/<link rel="preload" href="\/assets\/geist-latin-wght-normal-[^"]+".*?>/g);
console.log('Preload font link:', preloadFontMatches);

console.log('\n--- Module Preloads ---');
const modulePreloads = html.match(/<link rel="modulepreload" href="[^"]+".*?>/g);
if (modulePreloads) {
  modulePreloads.forEach(link => {
    if (link.includes('datepicker')) {
      console.error('FAIL: Found datepicker in preloads:', link);
    } else {
      console.log('OK:', link);
    }
  });
}

console.log('\n--- Stylesheets ---');
const stylesheets = html.match(/<link rel="stylesheet" href="[^"]+".*?>/g);
console.log('Stylesheets:', stylesheets);
