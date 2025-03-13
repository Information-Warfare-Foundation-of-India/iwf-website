import { NextResponse } from 'next/server';

export async function GET() {
  // Base URL of the site
  const baseUrl = 'https://iwf.org.in';
  
  // Current date in YYYY-MM-DD format for lastmod
  const date = new Date().toISOString().split('T')[0];
  
  // Define your site's pages
  const pages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'monthly', priority: '0.8' },
    { url: '/projects', changefreq: 'monthly', priority: '0.8' },
    { url: '/case-studies', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog', changefreq: 'weekly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    { url: '/donate', changefreq: 'monthly', priority: '0.9' },
    { url: '/volunteer', changefreq: 'monthly', priority: '0.8' },
    { url: '/privacy-policy', changefreq: 'yearly', priority: '0.5' },
    { url: '/terms-of-service', changefreq: 'yearly', priority: '0.5' },
    { url: '/sitemap', changefreq: 'monthly', priority: '0.4' },
  ];
  
  // Service-specific anchors
  const serviceAnchors = [
    'information-warfare',
    'cybersecurity',
    'investigative-media',
    'research',
    'digital-literacy',
    'e-waste',
    'policy',
    'corporate',
    'threat-intelligence',
    'awareness',
  ];
  
  // Add service anchors to pages
  serviceAnchors.forEach(anchor => {
    pages.push({
      url: `/services#${anchor}`,
      changefreq: 'monthly',
      priority: '0.7',
    });
  });
  
  // TODO: In a real application, you would dynamically fetch blog posts, projects, etc.
  // from your database or CMS and add them to the pages array
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Return the XML with the correct content type
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 