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

import PresentationSection, {
    type PresentationSectionProps,
} from "../components/presentation-section";
import PresentationInfo from "../data/presentation.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export async function HomePage({ preview = false }) {
    return (
        <div className="flex flex-col w-full gap-6">
            <PresentationSection
                {...(PresentationInfo as PresentationSectionProps)}
            />
            <Container>
                <ServiceSection {...(Services as ServiceSectionProps)} />
            </Container>
        </div>
    );
}
