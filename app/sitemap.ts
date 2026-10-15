import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const imgs = ['og.jpg', 'assets/towers-dusk.jpg', 'assets/towers-aerial-night.jpg', 'assets/living-room.jpg', 'assets/master-bedroom.jpg', 'assets/club-atmos.jpg', 'assets/rooftop-pool.jpg', 'assets/master-plan.jpg'];
  return [
    {
      url: `${SITE.url}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: imgs.map((p) => `${SITE.url}/${p}`),
    },
  ];
}
