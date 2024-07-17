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
} from "../components/services-section";
import Services from "../data/services.json";

import ReviewsSection, {
    type ReviewsSectionProps,
} from "@/modules/home/components/reviews-section";
import ReviewsInfo from "@/modules/home/data/reviews.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function HomePage() {
    return (
        <Layout preview>
            <Container>
                <Intro />
                <ServiceSection {...(Services as ServiceSectionProps)} />
                <ReviewsSection {...(ReviewsInfo as ReviewsSectionProps)} />
            </Container>
        </Layout>
    );
}
