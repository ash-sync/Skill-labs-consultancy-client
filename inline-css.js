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

// Find CSS link tag: <link rel="stylesheet" crossorigin href="/assets/index-*.css">
const cssLinkRegex = /<link\s+rel="stylesheet"\s+crossorigin\s+href="\/assets\/index-([^"]+)\.css">/i;
const match = htmlContent.match(cssLinkRegex);

if (match) {
  const cssFilename = `index-${match[1]}.css`;
  const cssPath = path.join(distDir, 'assets', cssFilename);

  if (fs.existsSync(cssPath)) {
    console.log(`Inlining CSS: ${cssFilename}`);
    let cssContent = fs.readFileSync(cssPath, 'utf8');

    // Fix relative font URLs (e.g. url(./geist...) -> url(/assets/geist...))
    cssContent = cssContent.replace(/url\(\s*['"]?\.\/([^'"]+)\s*['"]?\)/g, 'url(/assets/$1)');

    // Replace the link tag with inlined style
    const styleTag = `<style>${cssContent}</style>`;
    htmlContent = htmlContent.replace(match[0], styleTag);

    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    console.log('Successfully inlined CSS into dist/index.html!');

    // Delete the physical CSS file to avoid extra request
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
