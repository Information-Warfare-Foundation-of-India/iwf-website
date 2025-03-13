/**
 * This script downloads placeholder images for the IWF blog section
 * Run with: node download-placeholder-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directory if it doesn't exist
const imageDir = path.join(__dirname, 'public', 'images', 'blog');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
  console.log(`Created directory: ${imageDir}`);
}

// List of placeholder images to download
const images = [
  {
    name: 'deepfake.jpg',
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
    description: 'AI face manipulation visualization'
  },
  {
    name: 'cybersecurity.jpg',
    url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
    description: 'Cybersecurity concepts with lock'
  },
  {
    name: 'e-waste.jpg',
    url: 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=800&h=450&fit=crop',
    description: 'Electronic waste pile'
  },
  {
    name: 'information-warfare.jpg',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    description: 'Digital warfare visualization'
  },
  {
    name: 'digital-literacy.jpg',
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=450&fit=crop',
    description: 'Students learning digital skills'
  },
  {
    name: 'ai-misinformation.jpg',
    url: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&h=450&fit=crop',
    description: 'AI analyzing fake news'
  },
  {
    name: 'special-report.jpg',
    url: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
    description: 'Cybersecurity report visualization'
  }
];

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(filepath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there's an error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting download of placeholder images...');
  
  for (const image of images) {
    const filepath = path.join(imageDir, image.name);
    
    try {
      await downloadImage(image.url, filepath);
      console.log(`✅ Downloaded: ${image.name} - ${image.description}`);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}: ${error.message}`);
    }
  }
  
  console.log('\nPlaceholder images downloaded successfully!');
  console.log('Remember to replace these with your final images before deploying to production.');
  console.log('See BLOG_IMAGES_README.md for instructions on generating high-quality images.');
}

downloadAllImages(); 