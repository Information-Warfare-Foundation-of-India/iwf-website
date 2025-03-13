const fs = require('fs');
const fsp = require('fs').promises;
const https = require('https');
const path = require('path');

// Define image categories and their URLs
const images = {
  // Blog post images
  blogPosts: [
    {
      name: 'deepfake.jpg',
      url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop',
      description: 'AI face manipulation technology visualization'
    },
    {
      name: 'cybersecurity.jpg',
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
      description: 'Cybersecurity code and protection'
    },
    {
      name: 'e-waste.jpg',
      url: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&h=450&fit=crop',
      description: 'Electronic waste and recycling'
    },
    {
      name: 'information-warfare.jpg',
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
      description: 'Digital warfare visualization'
    },
    {
      name: 'digital-literacy.jpg',
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
      description: 'Students learning digital skills'
    },
    {
      name: 'ai-misinformation.jpg',
      url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop',
      description: 'AI analyzing data visualization'
    },
    {
      name: 'special-report.jpg',
      url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop',
      description: 'Cybersecurity report visualization'
    }
  ],
  
  // Category images
  categories: [
    {
      name: 'ai-ethics.jpg',
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      description: 'AI Ethics category'
    },
    {
      name: 'cybersecurity-cat.jpg',
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
      description: 'Cybersecurity category'
    },
    {
      name: 'environmental-cat.jpg',
      url: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=450&fit=crop',
      description: 'Environmental category'
    },
    {
      name: 'information-warfare-cat.jpg',
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
      description: 'Information Warfare category'
    },
    {
      name: 'education-cat.jpg',
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=450&fit=crop',
      description: 'Education category'
    }
  ],
  
  // Tag images
  tags: [
    {
      name: 'deepfakes-tag.jpg',
      url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
      description: 'Deepfakes tag'
    },
    {
      name: 'cybersecurity-tag.jpg',
      url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
      description: 'Cybersecurity tag'
    },
    {
      name: 'ai-ethics-tag.jpg',
      url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      description: 'AI Ethics tag'
    },
    {
      name: 'misinformation-tag.jpg',
      url: 'https://images.unsplash.com/photo-1590502160462-58b41354f588?w=800&h=450&fit=crop',
      description: 'Misinformation tag'
    },
    {
      name: 'election-security-tag.jpg',
      url: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=450&fit=crop',
      description: 'Election Security tag'
    }
  ],
  
  // Author images
  authors: [
    {
      name: 'admin.jpg',
      url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
      description: 'Generic admin profile photo'
    }
  ]
};

// Create directories if they don't exist
async function createDirectories() {
  const dirs = [
    'public/images/blog',
    'public/images/categories',
    'public/images/tags',
    'public/images/team'
  ];
  
  for (const dir of dirs) {
    try {
      await fsp.mkdir(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    } catch (error) {
      console.error(`Error creating directory ${dir}:`, error);
    }
  }
}

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
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting download of blog images...\n');
  
  await createDirectories();
  
  // Download blog post images
  console.log('Downloading blog post images:');
  for (const image of images.blogPosts) {
    const filepath = path.join('public/images/blog', image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`✅ Downloaded: ${image.name} - ${image.description}`);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
  
  // Download category images
  console.log('\nDownloading category images:');
  for (const image of images.categories) {
    const filepath = path.join('public/images/categories', image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`✅ Downloaded: ${image.name} - ${image.description}`);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
  
  // Download tag images
  console.log('\nDownloading tag images:');
  for (const image of images.tags) {
    const filepath = path.join('public/images/tags', image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`✅ Downloaded: ${image.name} - ${image.description}`);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
  
  // Download author images
  console.log('\nDownloading author images:');
  for (const image of images.authors) {
    const filepath = path.join('public/images/team', image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`✅ Downloaded: ${image.name} - ${image.description}`);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
  
  console.log('\nImage download complete!');
  console.log('Images have been saved to their respective directories in public/images/');
}

downloadAllImages(); 