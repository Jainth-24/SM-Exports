/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com","a.storyblok.com"]
    },
};

module.exports = nextConfig;
