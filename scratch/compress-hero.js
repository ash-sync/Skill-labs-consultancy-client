import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const heroPath = 'public/hero.webp';
const tempPath = 'public/hero_temp.webp';

async function main() {
  const metadata = await sharp(heroPath).metadata();
  console.log('Original dimensions:', metadata.width, 'x', metadata.height, 'Format:', metadata.format);

  // Resize to max width 1920 while maintaining aspect ratio, and compress
  await sharp(heroPath)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(tempPath);

  const oldSize = fs.statSync(heroPath).size;
  const newSize = fs.statSync(tempPath).size;
  console.log(`Original size: ${(oldSize / 1024).toFixed(2)} KB`);
  console.log(`Compressed size: ${(newSize / 1024).toFixed(2)} KB`);

  // Replace original with compressed version
  fs.unlinkSync(heroPath);
  fs.renameSync(tempPath, heroPath);
  console.log('Overwrote original hero.webp successfully!');
}

main().catch(console.error);
