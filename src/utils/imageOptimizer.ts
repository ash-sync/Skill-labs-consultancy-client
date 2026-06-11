/**
 * Dynamic Image URL Optimizer
 * Transforms external and local image URLs to load optimized, smaller, and modern image formats.
 */

export function optimizeImageUrl(url: string, width?: number): string {
  if (!url || typeof url !== 'string') return url;

  // 1. Optimize Flaticon CDN icons (usually requested at 512x512, we display them at 32x32 to 56x56)
  if (url.includes('cdn-icons-png.flaticon.com')) {
    // Replace /512/ or /128/ with /64/ to request a much smaller PNG size
    return url.replace('/512/', '/64/').replace('/128/', '/64/');
  }

  // 2. Optimize Cloudinary URLs
  if (url.includes('res.cloudinary.com')) {
    // Insert f_auto (format), q_auto (quality), and w_width if upload path is found
    const uploadMarker = '/image/upload/';
    if (url.includes(uploadMarker)) {
      const parts = url.split(uploadMarker);
      const targetWidth = width || 800; // default to 800px width for general destination cards
      
      // Prevent inserting duplicate transformations if they already exist
      if (!parts[1].startsWith('f_auto') && !parts[1].includes('q_auto')) {
        return `${parts[0]}${uploadMarker}f_auto,q_auto,w_${targetWidth}/${parts[1]}`;
      }
    }
  }

  // 3. Optimize Unsplash image URLs (uses Imgix backend)
  if (url.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('q', '80');
      if (width) {
        urlObj.searchParams.set('w', width.toString());
      } else if (!urlObj.searchParams.has('w')) {
        urlObj.searchParams.set('w', '1200'); // default fallback width
      }
      return urlObj.toString();
    } catch (e) {
      // Fallback regex replacement if URL construction fails
      let optimized = url;
      if (!optimized.includes('auto=')) optimized += '&auto=format';
      if (!optimized.includes('q=')) optimized += '&q=80';
      if (!optimized.includes('w=')) optimized += `&w=${width || 1200}`;
      return optimized;
    }
  }

  // 4. Map dynamic local public assets to webp versions
  if (url.startsWith('/images/destination/destinationBanner.png')) {
    return '/images/destination/destinationBanner.webp';
  }

  return url;
}
