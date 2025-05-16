import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://localhost:3000'],
  eslint: {
    dirs: ['app', 'components', 'libs'],
  },
};

export default nextConfig;
