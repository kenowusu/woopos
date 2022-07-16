/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
   domains:[
    'woopos.3megabyte.com',
    'basilicgh.com'
   ]
  },
  typescript:{
   ignoreBuildErrors:true 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
