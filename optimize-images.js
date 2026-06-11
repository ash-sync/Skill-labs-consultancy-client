import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
  path.join(__dirname, 'src/assets/images'),
  path.join(__dirname, 'public/images')
];

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const resPath = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(resPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const basename = path.basename(entry.name, ext);
        const webpPath = path.join(dir, `${basename}.webp`);

        // Skip if it's already a webp image
        if (entry.name.endsWith('.webp')) continue;

        console.log(`Processing: ${resPath} -> ${webpPath}`);

        try {
          let pipeline = sharp(resPath);

          // Apply specific resizing based on image type and usage
          if (entry.name === 'consultationBg.jpg') {
            pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
          } else if (entry.name === 'destinationBanner.png') {
            pipeline = pipeline.resize({ width: 800, withoutEnlargement: true });
          } else if (dir.includes('universities')) {
            pipeline = pipeline.resize({ width: 180, withoutEnlargement: true });
          } else if (dir.includes('process')) {
            pipeline = pipeline.resize({ width: 80, withoutEnlargement: true });
          } else if (dir.includes('brand')) {
            pipeline = pipeline.resize({ width: 250, withoutEnlargement: true });
          } else if (entry.name === 'Faq.png') {
            pipeline = pipeline.resize({ width: 600, withoutEnlargement: true });
          }

          await pipeline
            .webp({ quality: 75 })
            .toFile(webpPath);

          console.log(`Successfully created: ${webpPath}`);
        } catch (err) {
          console.error(`Error processing ${entry.name}:`, err);
        }
      }
    }
  }
}

async function run() {
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      console.log(`Optimizing images in ${dir}...`);
      await processDirectory(dir);
    }
  }
  console.log('Image optimization finished!');
}

run();
