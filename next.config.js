/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
    eslint: {
        ignoreDuringBuilds: true,
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'plus.unsplash.com',
          },
        ],
        unoptimized: true
      },
}

module.exports = nextConfig
