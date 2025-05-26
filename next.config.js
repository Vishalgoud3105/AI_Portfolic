/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for development
  images: {
    domains: ['your-domain.com'], // Allows loading images from external domains
    deviceSizes: [320, 420, 768, 1024, 1200], // Adds custom device sizes for image optimization
    imageSizes: [16, 32, 48, 64, 96], // Adds custom image sizes for static image optimization
  },
  i18n: {
    locales: ['en', 'es', 'fr'], // Example: Enable internationalization with supported locales
    defaultLocale: 'en', // Default locale if not set in the URL
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Optional: Avoid "fs" module error in client-side builds
      };
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/old-page', // Define a URL that needs to be redirected
        destination: '/new-page', // Define the destination of the redirect
        permanent: true, // Specify if the redirect is permanent (301)
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Define a custom route pattern
        destination: 'https://external-api.com/:path*', // Rewrites requests to external API
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Enhances security by preventing MIME-type sniffing
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevents your pages from being embedded in frames on other domains
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload', // Enforces secure connections
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache static assets for a year
          },
        ],
      },
    ];
  },
  experimental: {
    appDir: true, // Enables the new app directory feature (experimental feature, use cautiously)
  },
  react: {
    useSuspense: false, // Prevents Suspense being used in React 18's concurrent mode if you don’t want it
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';", // Add security headers for content policy
          },
          {
            key: 'Feature-Policy',
            value: "microphone 'none'; camera 'none'; geolocation 'none';", // Add feature policy headers
          },
        ],
      },
    ];
  },
  webpack5: true, // Enable Webpack 5 for better build performance
};

module.exports = nextConfig;
