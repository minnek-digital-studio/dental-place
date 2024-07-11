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

import AboutSection, {
    type AboutSectionProps,
} from "../components/about-section";
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "../components/lethelp-section";
import Services from "../data/services.json";
import AboutInfo from "../data/about.json";
import WhyUsInfo from "../data/whyus.json";
import WhyUsSection, {
    type WhyUsSectionProps,
} from "../components/whyus-section";
import LetHelpInfo from "../data/let-us-help.json";
import ArsSection, { ArsSectionProps } from "../components/ars-section";
import ArsInfo from "../data/ars.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export async function HomePage({ preview = false }) {
    return (
        <Container>
            <div className="flex flex-col gap-10">
                <ServiceSection {...(Services as ServiceSectionProps)} />
                <AboutSection {...(AboutInfo as AboutSectionProps)} />
                <WhyUsSection {...(WhyUsInfo as WhyUsSectionProps)} />
                <LetUsHelpSection {...(LetHelpInfo as LetUsHelpSectionProps)} />
                <ArsSection {...(ArsInfo as ArsSectionProps)} />
            </div>
        </Container>
    );
}
