import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";

export default function Home({ stories }) {
    const story = stories.find((item) => item.name === "landing");
    const productstories = stories.filter(
        (item) => item.full_slug.startsWith("products/") && !item.is_startpage
    );

    const feature = story.content.feature?.[0];
    const moreFeatures = story.content.moreFeatures?.[0];
    const faq = story.content.faq;
    return (
        <Layout className="" products={productstories}>
            <SEO
                title="SM Exports - Your Gateway to Quality Goods 🚀"
                description="Welcome to SM Exports, your trusted partner for superior quality agricultural products. We take pride in delivering a diverse range of premium rice, wheat, and more to meet your culinary and nutritional needs. As a leading exporter, we prioritize excellence in every grain, ensuring that your kitchen is stocked with the finest ingredients from around the world."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner content={story?.content?.hero?.[0]} />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Features</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                {feature?.heading}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>{feature?.subheading}</p>
                            </Content>
                            <ContentImage features={feature?.features} />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>More Features</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                {moreFeatures?.title}
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>{moreFeatures?.subtitle}</p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                {moreFeatures?.cards.map((card, key) => (
                                    <Card
                                        key={key}
                                        className="col-span-1 text-primary-900"
                                    >
                                        <CardBody className="w-full bg-white-600/20 p-12">
                                            <CardImage
                                                src={card.image.filename}
                                                alt="Customizable Layouts image used."
                                            />
                                            <CardHeader className="!text-black !text-2xl !font-bold">
                                                {card.title}
                                            </CardHeader>
                                            <p>{card.content}</p>
                                        </CardBody>
                                    </Card>
                                ))}
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about SM Exports?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion faq={faq} />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
export async function getStaticProps() {
    let sbParams = {
        version: "draft"
    };

    const storyblokApi = getStoryblokApi();

    let { data } = await storyblokApi.get(`cdn/stories/`, sbParams);

    return {
        props: {
            stories: data ? data.stories : false
        },
        revalidate: 10
    };
}
