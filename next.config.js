/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com","a.storyblok.com"]
    },
    env: {
        siteTitle: "Your Company",
        siteDescription: "Your company description.",
        siteKeywords: "your company keywords",
        siteUrl: "You site url",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@your_handle"
    },
};

module.exports = nextConfig;
