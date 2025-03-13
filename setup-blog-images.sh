#!/bin/bash

echo "==================================================="
echo "IWF Blog Images Setup"
echo "==================================================="
echo
echo "This script will download placeholder images for the blog section."
echo
read -p "Press Enter to continue or Ctrl+C to cancel..."

echo
echo "Creating directories..."
mkdir -p public/images/blog

echo
echo "Running download script..."
node download-placeholder-images.js

echo
echo "==================================================="
echo "Setup complete!"
echo "==================================================="
echo
echo "The placeholder images have been downloaded to:"
echo "public/images/blog/"
echo
echo "Remember to replace these with your final images before deploying."
echo "See BLOG_IMAGES_README.md for instructions on generating high-quality images."
echo
read -p "Press Enter to exit..." 