/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
      outputStandalone: true,
   },
   images: {
      domains: ['restore-ai-bucket.s3.eu-north-1.amazonaws.com']
   },
}

module.exports = nextConfig
