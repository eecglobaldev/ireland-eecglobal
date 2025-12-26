import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai.eecglobal.com',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
