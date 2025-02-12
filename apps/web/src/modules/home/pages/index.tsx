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
import Footer from "@/modules/common/components/footer";
import {
    NavBar,
    type NavbarVariants,
} from "@/modules/common/components/navbar";

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
                    <video
                        preload="auto"
                        aria-label="Dental Video"
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover filter brightness-[0.3]"
                    >
                        <source
                            src={"/videos/dental_video.mp4"}
                            type="video/mp4"
                        />
                    </video>
                    <NavBar
                        className="relative backdrop-blur-sm"
                        variant={"transparent"}
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
