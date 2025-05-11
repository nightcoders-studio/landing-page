const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  defaultChangeFreq: 'weekly',
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*', '/posts', '/posts/*', '/404', '/500'],
  transform: async (config, path) => {
    const priority =
      path === '/'
        ? 1.0
        : path.startsWith('/portfolios/') && path.split('/').length === 3
          ? 0.9
          : path.startsWith('/stores/') && path.split('/').length === 3
            ? 0.9
            : path === '/portfolios'
              ? 0.8
              : path === '/stores'
                ? 0.8
                : 0.7

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/admin/*', '/api/*', '/posts', '/posts/*', '/404', '/500'],
      },
    ],
  },
}
