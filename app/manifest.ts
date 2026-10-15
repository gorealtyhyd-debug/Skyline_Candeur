import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#182340',
    theme_color: '#182340',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }], // served from app/icon.png
  };
}
