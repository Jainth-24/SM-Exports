import { Layout } from "@components/Layout";
import ProductListings from "@components/ProductListings";
import SEO from "@components/SEO/SEO";
import StoreHeading from "@components/StoreHeading";
import { getStoryblokApi } from "@storyblok/react";
import React from "react";

const Products = ({ products }) => {
    return (
        <Layout products={products}>
            <SEO
                title="SM Exports - Your Gateway to Quality Goods 🚀"
                description="Welcome to SM Exports, your trusted partner for superior quality agricultural products. We take pride in delivering a diverse range of premium rice, wheat, and more to meet your culinary and nutritional needs. As a leading exporter, we prioritize excellence in every grain, ensuring that your kitchen is stocked with the finest ingredients from around the world."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                <StoreHeading />
                <ProductListings products={products} />
            </div>
        </Layout>
    );
};

export default Products;
export async function getStaticProps() {
    // home is the default slug for the homepage in Storyblok

    // load the draft version
    let sbParams = {
        version: "draft", // or 'published'
        starts_with: "products/",
        is_startpage: false
    };

    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/`, sbParams);

    return {
        props: {
            products: data ? data.stories : false
        },
        revalidate: 3600 // revalidate every hour
    };
}
