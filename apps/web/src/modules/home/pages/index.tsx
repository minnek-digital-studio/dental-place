import { Metadata } from "next";
import Container from "@/modules/common/components/container";
import Layout from "@/modules/common/components/layout";
import { CMS_NAME } from "@/lib/constants";
import ServiceSection, {
    ServiceSectionProps,
} from "../components/services-section";
import ArsSection, { ArsSectionProps } from "../components/ars-section";
import Services from "../data/services.json";
import InstagramSection, {
    type InstagramSectionProps,
} from "../components/instagram-section";
import InstagramInfo from "../data/instagram.json";
import ArsInfo from "../data/ars.json";
import AboutSection, {
    type AboutSectionProps,
} from "../components/about-section";
import AboutInfo from "../data/about.json";
import WhyUsInfo from "../data/whyus.json";
import WhyUsSection, {
    type WhyUsSectionProps,
} from "../components/whyus-section";

import ReviewsSection, {
    type ReviewsSectionProps,
} from "@/modules/home/components/reviews-section";
import ReviewsInfo from "@/modules/home/data/reviews.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function HomePage() {
    return (
        <>
            <ServiceSection {...(Services as ServiceSectionProps)} />
            <AboutSection {...(AboutInfo as AboutSectionProps)} />
            <WhyUsSection {...(WhyUsInfo as WhyUsSectionProps)} />
            <ReviewsSection {...(ReviewsInfo as ReviewsSectionProps)} />
            <InstagramSection {...(InstagramInfo as InstagramSectionProps)} />
            <ArsSection {...(ArsInfo as ArsSectionProps)} />
        </>
    );
}
