import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const htmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html not found! Run npm run build first.');
  process.exit(1);
}

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// 1. Inline critical CSS
const cssLinkRegex = /<link\s+rel="stylesheet"\s+crossorigin\s+href="\/assets\/index-([^"]+)\.css">/i;
const match = htmlContent.match(cssLinkRegex);

if (match) {
  const cssFilename = `index-${match[1]}.css`;
  const cssPath = path.join(distDir, 'assets', cssFilename);

  if (fs.existsSync(cssPath)) {
    console.log(`Inlining CSS: ${cssFilename}`);
    let cssContent = fs.readFileSync(cssPath, 'utf8');

    cssContent = cssContent.replace(/url\(\s*['"]?\.\/([^'"]+)\s*['"]?\)/g, 'url(/assets/$1)');
    cssContent = cssContent.replace(/font-display\s*:\s*swap/gi, 'font-display: optional');

    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = htmlContent.replace(match[0], styleTag);

    try {
      const assetsDir = path.join(distDir, 'assets');
      if (fs.existsSync(assetsDir)) {
        const files = fs.readdirSync(assetsDir);
        const fontFile = files.find(file => /^geist-latin-wght-normal-.*\.woff2$/.test(file));
        if (fontFile) {
          console.log(`Dynamic preload font resolved: ${fontFile}`);
          htmlContent = htmlContent.replace(
            /href="\/assets\/geist-latin-wght-normal\.woff2"/g,
            `href="/assets/${fontFile}"`
          );
        } else {
          console.warn('Warning: Could not find geist-latin-wght-normal font file in dist/assets.');
        }
      }
    } catch (e) {
      console.warn(`Warning dynamic font preload mapping failed: ${e.message}`);
    }

    try {
      fs.unlinkSync(cssPath);
      console.log(`Deleted unused asset: ${cssPath}`);
    } catch (e) {
      console.warn(`Could not delete CSS file: ${e.message}`);
    }
  } else {
    console.error(`CSS file not found at path: ${cssPath}`);
  }
} else {
  console.log('No matching index CSS link tag found in dist/index.html.');
}

// 2. Defer the render-blocking datepicker CSS to non-blocking async load.
// The datepicker CSS is only needed after the user interacts with the date field.
// media="print" trick: loads async without blocking paint; onload switches to "all".
const datepickerCssRegex = /<link\s+rel="stylesheet"\s+crossorigin\s+href="(\/assets\/vendor-datepicker-[^"]+\.css)">/i;
const dpMatch = htmlContent.match(datepickerCssRegex);
if (dpMatch) {
  const href = dpMatch[1];
  const asyncLoad = `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
  htmlContent = htmlContent.replace(dpMatch[0], asyncLoad);
  console.log('Datepicker CSS converted to non-blocking async load.');
} else {
  console.log('No datepicker CSS link found (may already be deferred).');
}

// 3. Write final HTML
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('Successfully processed dist/index.html!');
