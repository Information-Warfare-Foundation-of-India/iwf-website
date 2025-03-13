const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const toIco = require('to-ico');

async function generateFavicons() {
  const inputFile = path.join(__dirname, '../public/favicon.svg');
  const outputDir = path.join(__dirname, '../public');

  try {
    // Check if input file exists
    await fs.access(inputFile);

    // Define sizes for PNG favicons
    const sizes = [16, 32, 48, 64, 128, 180, 192, 512];
    const pngBuffers = {};

    // Generate PNG favicons
    for (const size of sizes) {
      const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
      const buffer = await sharp(inputFile)
        .resize(size, size)
        .png()
        .toBuffer();
      
      await fs.writeFile(outputFile, buffer);
      console.log(`✓ Generated ${size}x${size} PNG favicon`);

      // Store buffers for ICO generation
      if ([16, 32, 48].includes(size)) {
        pngBuffers[size] = buffer;
      }
    }

    // Generate ICO file
    const icoBuffer = await toIco([pngBuffers[16], pngBuffers[32], pngBuffers[48]]);
    await fs.writeFile(path.join(outputDir, 'favicon.ico'), icoBuffer);
    console.log('✓ Generated ICO favicon');

    console.log('\nFavicon generation complete! Add these tags to your HTML head:');
    console.log(`
<!-- Favicon -->
<link rel="icon" href="/favicon.ico" sizes="any"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png"/>
    `);

  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons(); 