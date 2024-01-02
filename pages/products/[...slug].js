import { Layout } from "@components/Layout";
import ProductSection from "@components/ProductSection";
import SEO from "@components/SEO/SEO";
import { getStoryblokApi } from "@storyblok/react";

function ProductPage({ product, allProducts }) {
    return (
        <Layout products={allProducts}>
            <SEO
                title="SM Exports - Your Gateway to Quality Goods 🚀"
                description="Welcome to SM Exports, your trusted partner for superior quality agricultural products. We take pride in delivering a diverse range of premium rice, wheat, and more to meet your culinary and nutritional needs. As a leading exporter, we prioritize excellence in every grain, ensuring that your kitchen is stocked with the finest ingredients from around the world."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-28 ">
                <ProductSection productData={product} />
            </div>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    console.log("Fetching data for:", params.slug);
    const slug = params.slug ? `products/${params.slug.join("/")}` : "products";
    const sbParams = {
        version: "draft" // or 'published'
    };

    const storyblokApi = getStoryblokApi();
    try {
        const { data } = await storyblokApi.get(`cdn/stories`, sbParams);
        console.log("Storyblok API Response:", data);

        const product = data.stories.find((item) => item.full_slug === slug);
        const allProducts = data.stories.filter(
            (item) =>
                item.full_slug.startsWith("products/") && !item.is_startpage
        );

        return {
            props: {
                product: product ? product : false,
                allProducts: allProducts ? allProducts : false
            },
            revalidate: 10
        };
    } catch (error) {
        console.error("Error fetching data from Storyblok:", error);
        return {
            notFound: true
        };
    }
}

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/links/", {
        version: "draft",
        starts_with: "products/",
        is_startpage: false
    });
    const paths = Object.values(data.links)
        .filter((link) => !link.is_folder && link.slug !== "products/")
        .map((link) => {
            const slug = link.slug;
            const splittedSlug = slug.split("/");
            return { params: { slug: splittedSlug } };
        });

    return {
        paths: paths,
        fallback: true
    };
}
export default ProductPage;
