#!/bin/bash

echo "==================================================="
echo "IWF Blog Images Setup"
echo "==================================================="
echo
echo "This script will download all required images for the blog section."
echo
read -p "Press Enter to continue or Ctrl+C to cancel..."

echo
echo "Installing required packages..."
npm install --save-dev sharp

echo
echo "Running image downloader..."
node scripts/download-blog-images.js

echo
echo "==================================================="
echo "Setup complete!"
echo "==================================================="
echo
echo "The images have been downloaded to:"
echo "- public/images/blog/ (Blog post images)"
echo "- public/images/categories/ (Category images)"
echo "- public/images/tags/ (Tag images)"
echo "- public/images/team/ (Author images)"
echo
read -p "Press Enter to exit..." 