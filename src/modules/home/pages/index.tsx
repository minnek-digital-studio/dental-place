import { config } from "@/config/constants";
import CallToAction from "@/modules/common/components/CallToAction";
import Footer from "@/modules/common/components/footer";
import { NavBar } from "@/modules/common/components/navbar";
import { getHomePageInfo } from "@/modules/home/actions/home.action";
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
import { VideoSection } from "@/modules/home/components/video-section";
import type { Metadata } from "next";

export const dynamic = config.DYNAMIC_PAGE_GENERATION
    ? "force-dynamic"
    : "auto";

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
        <>
            <div className="flex flex-col w-full gap-10">
                <div className="relative min-h-screen flex flex-col">
                    <VideoSection {...PresentationInfo} />
                    <NavBar
                        className="relative"
                        variant={"transparentLight"}
                        align="center"
                        text={"md"}
                    />
                    <PresentationSection
                        {...(PresentationInfo as PresentationSectionProps)}
                    />
                </div>

                {callToActions[0] && <CallToAction {...callToActions[0]} />}
                <ServiceSection {...(ServicesInfo as ServiceSectionProps)} />
                {callToActions[1] && <CallToAction {...callToActions[1]} />}
                <ReviewsSection {...(ReviewsInfo as ReviewsSectionProps)} />
                {callToActions[2] && <CallToAction {...callToActions[2]} />}
                <InstagramSection
                    {...(InstagramInfo as InstagramSectionProps)}
                />
                <ArsSection {...(ArsInfo as ArsSectionProps)} />
                <Footer />
            </div>
        </>
    );
}
