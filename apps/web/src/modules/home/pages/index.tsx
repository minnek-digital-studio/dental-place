import { CMS_NAME } from "@/lib/constants";
import AboutSection, {
    type AboutSectionProps,
} from "@/modules/home/components/about-section";
import ArsSection, {
    type ArsSectionProps,
} from "@/modules/home/components/ars-section";
import InstagramSection, {
    type InstagramSectionProps,
} from "@/modules/home/components/instagram-section";
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "@/modules/home/components/lethelp-section";
import PresentationSection, {
    type PresentationSectionProps,
} from "@/modules/home/components/presentation-section";
import ReviewsSection, {
    type ReviewsSectionProps,
} from "@/modules/home/components/reviews-section";
import ServiceSection, {
    ServiceSectionProps,
} from "@/modules/home/components/services-section";
import WhyUsSection, {
    type WhyUsSectionProps,
} from "@/modules/home/components/whyus-section";
import AboutInfo from "@/modules/home/data/about.json";
import ArsInfo from "@/modules/home/data/ars.json";
import InstagramInfo from "@/modules/home/data/instagram.json";
import LetHelpInfo from "@/modules/home/data/let-us-help.json";
import PresentationInfo from "@/modules/home/data/presentation.json";
import ReviewsInfo from "@/modules/home/data/reviews.json";
import Services from "@/modules/home/data/services.json";
import WhyUsInfo from "@/modules/home/data/whyus.json";
import { Metadata } from "next";
import Layout from "@/modules/common/layouts/layout";
import { getHomePageInfo } from "../actions/home.action";
import CallToAction from "@/modules/common/components/CallToAction";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function HomePage() {
    const {
        PresentationInfo,
        ArsInfo,
        InstagramInfo,
        ReviewsInfo,
        ServicesInfo,
        callToActions,
    } = await getHomePageInfo();

    return (
        <Layout>
            <PresentationSection
                {...(PresentationInfo as PresentationSectionProps)}
            />
            <ServiceSection {...(ServicesInfo as ServiceSectionProps)} />
            <CallToAction {...callToActions[0]} />
            <CallToAction {...callToActions[1]} />
            <ReviewsSection {...(ReviewsInfo as ReviewsSectionProps)} />
            <CallToAction {...callToActions[2]} />
            <InstagramSection {...(InstagramInfo as InstagramSectionProps)} />
            <ArsSection {...(ArsInfo as ArsSectionProps)} />
        </Layout>
    );
}
