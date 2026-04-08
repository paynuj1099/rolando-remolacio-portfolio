const createWithVercelToolbar = require('@vercel/toolbar/plugins/next');

const nextConfig = {
  async headers() {
    return [
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Handle optional @vercel/flags-definitions module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@vercel/flags-definitions': false,
    };
    return config;
  },
}

const withVercelToolbar = createWithVercelToolbar();
module.exports = withVercelToolbar(nextConfig);