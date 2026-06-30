import { MetadataRoute } from 'next';
import { VARIABLES } from '@/constants/variables';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = VARIABLES.domain;

  const routes = [
    '',
    '/about',
    '/events',
    '/music',
    '/booking',
  ].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
