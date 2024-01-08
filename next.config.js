/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dito',
    images: {
        unoptimized: true,
    },
    // ⥥ Delete the following lines later before deployment ⥥
    // experimental: {
    //     serverActions: true,
    // },
    // ⥣ Delete the upper lines later before deployment ⥣
};

module.exports = nextConfig
