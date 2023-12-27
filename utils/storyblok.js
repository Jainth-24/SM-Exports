// lib/storyblok.js

import StoryblokClient from "storyblok-js-client";

const storyblok = new StoryblokClient({
    accessToken: "ZOAoDzmxMPKmxjlTozcjvgtt"
});

export async function getStoryblokProductSlugs() {
    try {
        const { data } = await storyblok.get("cdn/links", {
            version: "draft" // Use 'published' in production
        });

        console.log("Storyblok Links Data:", data);

        if (data && data.links && typeof data.links === "object") {
            const productSlugs = Object.values(data.links)
                .filter(
                    (link) =>
                        link.is_folder === false &&
                        link.parent_id &&
                        data.links[link.parent_id] &&
                        data.links[link.parent_id].slug === "products/"
                ) // Adjust the folder name if needed
                .map((link) => link.slug);

            return productSlugs;
        } else {
            throw new Error("Unexpected data structure from Storyblok.");
        }
    } catch (error) {
        console.error(
            "Error fetching product slugs from Storyblok:",
            error.message
        );
        return [];
    }
}

export async function getStoryblokProduct(slug) {
    try {
        const { data } = await storyblok.get(`cdn/stories/product/${slug}`, {
            version: "draft" // Use 'published' in production
        });

        if (data && data.story && data.story.content) {
            return data.story.content;
        } else {
            throw new Error(`Product not found for slug: ${slug}`);
        }
    } catch (error) {
        console.error(
            "Error fetching product data from Storyblok:",
            error.message
        );
        return null;
    }
}
