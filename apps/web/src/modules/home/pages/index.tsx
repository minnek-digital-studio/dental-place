import { Metadata } from "next";
import Container from "@/modules/common/components/container";
import Layout from "@/modules/common/components/layout";
import { CMS_NAME } from "@/lib/constants";
import ServiceSection, {
    ServiceSectionProps,
} from "../components/services-section";
import Services from "../data/services.json";

import InstagramPosts, {
    type InstagramPostProps,
} from "../components/instagram-posts-section";
import InstagramPostsInfo from "../data/instagram-post.json";
import InstagramSection, {
    type InstagramSectionProps,
} from "../components/instagram-section";
import InstagramInfo from "../data/instagram.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function HomePage() {
    return (
        <Layout preview>
            <Container>
                <ServiceSection {...(Services as ServiceSectionProps)} />
                <InstagramPosts
                    {...(InstagramPostsInfo as InstagramPostProps)}
                />
                <InstagramSection
                    {...(InstagramInfo as InstagramSectionProps)}
                />
            </Container>
        </Layout>
    );
}
