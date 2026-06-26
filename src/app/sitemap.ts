import type { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/guides';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.ad-roi.cn';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/roi-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/payback-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/profit-calculator`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
  ];

  const guidePages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages];
}
