@echo off
echo ===================================================
echo IWF Blog Images Setup
echo ===================================================
echo.
echo This script will download placeholder images for the blog section.
echo.
echo Press any key to continue or CTRL+C to cancel...
pause > nul

echo.
echo Creating directories...
if not exist "public\images\blog" mkdir "public\images\blog"

echo.
echo Running download script...
node download-placeholder-images.js

echo.
echo ===================================================
echo Setup complete!
echo ===================================================
echo.
echo The placeholder images have been downloaded to:
echo public\images\blog\
echo.
echo Remember to replace these with your final images before deploying.
echo See BLOG_IMAGES_README.md for instructions on generating high-quality images.
echo.
echo Press any key to exit...
pause > nul 