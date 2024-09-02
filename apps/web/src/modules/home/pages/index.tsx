import { CMS_NAME } from "@/lib/constants";
import ArsSection, {
    type ArsSectionProps,
} from "@/modules/home/components/ars-section";
import InstagramSection, {
    type InstagramSectionProps,
} from "@/modules/home/components/instagram-section";
import PresentationSection, {
    type PresentationSectionProps,
} from "@/modules/home/components/presentation-section";
import ReviewsSection, {
    type ReviewsSectionProps,
} from "@/modules/home/components/reviews-section";
import ServiceSection, {
    ServiceSectionProps,
} from "@/modules/home/components/services-section";
import { Metadata } from "next";
import Layout from "@/modules/common/layouts/layout";
import { getHomePageInfo } from "../actions/home.action";
import CallToAction from "@/modules/common/components/CallToAction";

export async function generateMetadata(): Promise<Metadata> {
    const { seo } = await getHomePageInfo();

    return {
        ...seo,
    };
}

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
            {callToActions[0] && <CallToAction {...callToActions[0]} />}
            {callToActions[1] && <CallToAction {...callToActions[1]} />}
            <ReviewsSection {...(ReviewsInfo as ReviewsSectionProps)} />
            {callToActions[2] && <CallToAction {...callToActions[2]} />}
            <InstagramSection {...(InstagramInfo as InstagramSectionProps)} />
            <ArsSection {...(ArsInfo as ArsSectionProps)} />
        </Layout>
    );
}
