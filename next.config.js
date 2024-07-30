const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {images:{unoptimized:true}, output:"export", exportTrailingSlash:true}

module.exports = withContentlayer(nextConfig)