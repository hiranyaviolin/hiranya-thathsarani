import { MetadataRoute } from 'next';
import { VARIABLES } from '@/constants/variables';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${VARIABLES.domain}/sitemap.xml`,
  };
}
