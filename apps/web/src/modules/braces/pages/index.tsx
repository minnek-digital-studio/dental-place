import React from "react";
import Layout from "@/modules/common/layouts/layout";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/braces/components/hero-section";
import BracesPhotosSection, {
    type BracesPhotosSectionProps,
} from "@/modules/braces/components/braces-photos-section";
import type { Metadata } from "next";
import CallToAction from "@/modules/common/components/CallToAction";

import { getBracesExpressPageInfo } from "@/modules/braces/actions/braces.actions";

export const metadata: Metadata = {
    title: "Express Braces",
    description: "Express Braces",
};

const ExpressBracesPage = async () => {
    const { HeroInfo, BracesPhotosInfo, callToActions } =
        await getBracesExpressPageInfo();
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
            {callToActions.map((cta) => (
                <CallToAction {...cta} />
            ))}
            <BracesPhotosSection
                {...(BracesPhotosInfo as BracesPhotosSectionProps)}
            />
        </Layout>
    );
};

export default ExpressBracesPage;
