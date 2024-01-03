// pages/about.js

import { Layout } from "@components/Layout";
import SEO from "@components/SEO/SEO";
import { getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export default function About({ story, allProducts }) {
    return (
        <Layout products={allProducts}>
            <SEO
                title="SM Exports - About Us"
                description="Discover the story behind SM Exports and our commitment to delivering premium agricultural products globally."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20">
                <main className="flex flex-col px-10 flex-1">
                    <h1 className="text-5xl font-semibold mb-16 mt-10 text-center">
                        Meet Our Founder
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:items-start mb-4 justify-between lg:mx-24 gap-5">
                        <div className="mb-4 md:mb-0 md:mr-4 lg:w-1/2">
                            <Image
                                src={story?.content?.ownerImage?.filename}
                                alt={`Photo of ${story?.content?.ownerName}`}
                                width={200}
                                priority
                                height={200}
                                className="h-96 w-96 md:w-[700px] max-md:w-96 rounded-md"
                            />
                        </div>
                        <div className="lg:w-1/2 my-auto">
                            <div className="text-lg text-gray-600 mb-4 max-md:text-center">
                                {render(story?.content?.ownerDescription)}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let slug = "about";
    let sbParams = {
        version: "draft" // or 'published'
    };
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories`, sbParams);

    const aboutStory = data.stories.find((item) => item.full_slug === slug);
    const allProducts = data.stories.filter(
        (item) => item.full_slug.startsWith("products/") && !item.is_startpage
    );
    return {
        props: {
            story: aboutStory ? aboutStory : false,
            allProducts: allProducts ? allProducts : false
        },
        revalidate: 10
    };
}
