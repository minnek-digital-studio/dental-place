import { Metadata } from "next";
import Container from "@/modules/common/components/container";
import MoreStories from "@/modules/common/components/more-stories";
import HeroPost from "@/modules/common/components/hero-post";
import Intro from "@/modules/common/components/intro";
import Layout from "@/modules/common/components/layout";
import { getAllPostsForHome } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import ServiceSection, {
    ServiceSectionProps,
} from "../components/service-section";
import AboutSection, {
    type AboutSectionProps,
} from "../components/about-section";
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "../components/lethelp-section";
import Services from "../data/services.json";
import AboutInfo from "../data/about.json";
import LetHelpInfo from "../data/let-us-help.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export async function HomePage({ preview = false }) {
    const { edges } = await getAllPostsForHome(preview);
    const heroPost = edges[0]?.node;
    const morePosts = edges.slice(1);

    return (
        <Layout preview={preview}>
            <Container>
                <Intro />
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.featuredImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts.length > 0 && <MoreStories posts={morePosts} />}

                <div className="flex flex-col gap-10">
                    <ServiceSection {...(Services as ServiceSectionProps)} />
                    <AboutSection {...(AboutInfo as AboutSectionProps)} />
                    <LetUsHelpSection
                        {...(LetHelpInfo as LetUsHelpSectionProps)}
                    />
                </div>
            </Container>
        </Layout>
    );
}
