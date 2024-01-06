/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dito',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig
