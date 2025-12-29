import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // Enable Next.js Image optimization for better Core Web Vitals
    formats: ['image/avif', 'image/webp'], // Use modern image formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai.eecglobal.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|svg|ico|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icon.svg',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*\\.(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Configure Turbopack to resolve modules from project directory
  turbopack: {
    resolveAlias: {
      tailwindcss: path.join(__dirname, 'node_modules', 'tailwindcss'),
    },
  },
  // Webpack config for CSS and module resolution
  webpack: (config, { dir, isServer }) => {
    // Ensure modules are resolved from the project directory first, not parent
    const projectNodeModules = path.join(dir, 'node_modules');
    
    // Update resolve.modules to prioritize project node_modules
    if (!config.resolve.modules) {
      config.resolve.modules = [];
    }
    // Remove any existing project node_modules entry and add it first
    config.resolve.modules = config.resolve.modules.filter(
      (m: string) => m !== projectNodeModules
    );
    config.resolve.modules.unshift(projectNodeModules);
    
    // Also add explicit alias for tailwindcss
    if (!config.resolve.alias) {
      config.resolve.alias = {};
    }
    config.resolve.alias['tailwindcss'] = path.join(projectNodeModules, 'tailwindcss');
    
    return config;
  },
};

export default nextConfig;
