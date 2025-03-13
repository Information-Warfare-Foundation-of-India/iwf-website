# IWF Blog Images

This directory contains all images used in the IWF blog section. The images are organized into the following subdirectories:

## Directory Structure

```
public/images/
├── blog/           # Blog post featured images
├── categories/     # Category header images
├── tags/          # Tag header images
└── team/          # Author profile images
```

## Image Categories

### Blog Post Images
- `deepfake.jpg` - AI face manipulation technology visualization
- `cybersecurity.jpg` - Cybersecurity code and protection
- `e-waste.jpg` - Electronic waste and recycling
- `information-warfare.jpg` - Digital warfare visualization
- `digital-literacy.jpg` - Students learning digital skills
- `ai-misinformation.jpg` - AI analyzing data visualization
- `special-report.jpg` - Cybersecurity report visualization

### Category Images
- `ai-ethics.jpg` - AI Ethics category header
- `cybersecurity-cat.jpg` - Cybersecurity category header
- `environmental-cat.jpg` - Environmental category header
- `information-warfare-cat.jpg` - Information Warfare category header
- `education-cat.jpg` - Education category header

### Tag Images
- `deepfakes-tag.jpg` - Deepfakes tag header
- `cybersecurity-tag.jpg` - Cybersecurity tag header
- `ai-ethics-tag.jpg` - AI Ethics tag header
- `misinformation-tag.jpg` - Misinformation tag header
- `election-security-tag.jpg` - Election Security tag header

### Author Images
- `ranjan-kumar-samal.jpg` - Ranjan Kumar Samal profile photo
- `bibhuti-bhusan-nayak.jpg` - Dr. Bibhuti Bhusan Nayak profile photo
- `niroj-mohapatra.jpg` - Niroj Mohapatra profile photo

## Image Specifications

- Blog post images: 800x450px (16:9 ratio)
- Category images: 800x450px (16:9 ratio)
- Tag images: 800x450px (16:9 ratio)
- Author images: 400x400px (1:1 ratio)

## Setting Up Images

To set up all required images:

1. Make sure you have Node.js installed
2. Run the setup script:
   ```bash
   chmod +x scripts/setup-blog-images.sh
   ./scripts/setup-blog-images.sh
   ```

This will download all necessary images from Unsplash and save them in their respective directories.

## Image Credits

All images are sourced from [Unsplash](https://unsplash.com) under their free-to-use license. The specific photographers are credited in the image metadata. 