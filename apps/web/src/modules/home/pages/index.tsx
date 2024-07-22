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
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "../components/lethelp-section";
import AboutInfo from "../data/about.json";
import LetHelpInfo from "../data/let-us-help.json";

import ReviewsSection, {
    type ReviewsSectionProps,
} from "@/modules/home/components/reviews-section";
import ReviewsInfo from "@/modules/home/data/reviews.json";

import PresentationSection, {
    type PresentationSectionProps,
} from "../components/presentation-section";
import PresentationInfo from "../data/presentation.json";

export const metadata: Metadata = {
    title: `Next.js Blog Example with ${CMS_NAME}`,
};

export default async function HomePage() {
    return (
        <div className="flex flex-col w-full gap-10">
            <PresentationSection
                {...(PresentationInfo as PresentationSectionProps)}
            />
            <ServiceSection {...(Services as ServiceSectionProps)} />
            <AboutSection {...(AboutInfo as AboutSectionProps)} />
            <LetUsHelpSection {...(LetHelpInfo as LetUsHelpSectionProps)} />
            <ReviewsSection {...(ReviewsInfo as ReviewsSectionProps)} />
            <InstagramSection {...(InstagramInfo as InstagramSectionProps)} />
            <ArsSection {...(ArsInfo as ArsSectionProps)} />
        </div>
    );
}
