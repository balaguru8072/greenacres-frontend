import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://greenacresdelta.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://greenacresdelta.com/aboutPages', // Static URL போடுங்க
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://greenacresdelta.com/preparatoryPages', // Static URL போடுங்க
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://greenacresdelta.com/ContactPages',
      lastModified: new Date(),
      priority: 0.7,
    },
  ]
}
