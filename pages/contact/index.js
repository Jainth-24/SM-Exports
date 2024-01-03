import { Layout } from "@components/Layout";
import SEO from "@components/SEO/SEO";
import {
    useStoryblokState,
    getStoryblokApi,
    StoryblokComponent
} from "@storyblok/react";
import { Flashlight } from "lucide-react";

export default function Contact({ story, allProducts }) {
    story = useStoryblokState(story);
    if (!story && !story.content) return <div>Loading...</div>;
    return (
        <>
            <Layout products={allProducts}>
                <SEO
                    title="SM Exports - Your Gateway to Quality Goods 🚀"
                    description="Welcome to SM Exports, your trusted partner for superior quality agricultural products. We take pride in delivering a diverse range of premium rice, wheat, and more to meet your culinary and nutritional needs. As a leading exporter, we prioritize excellence in every grain, ensuring that your kitchen is stocked with the finest ingredients from around the world."
                />
                <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 max-md:pt-40 lg:pt-14">
                    <div className="flex justify-center items-center self-center h-screen">
                        <StoryblokComponent
                            blok={story.content}
                            allProducts={allProducts}
                        />
                        ;
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    let slug = "contact";
    let sbParams = {
        version: "draft" // or 'published'
    };
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories`, sbParams);

    const contactstory = data.stories.find((item) => item.full_slug === slug);
    const allProducts = data.stories.filter(
        (item) => item.full_slug.startsWith("products/") && !item.is_startpage
    );
    return {
        props: {
            story: contactstory ? contactstory : false,
            allProducts: allProducts ? allProducts : false
        },
        revalidate: 10
    };
}
