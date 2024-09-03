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
import HelpFormSection, {
    type HelpFormSectionProps,
} from "../components/help-form-section";
import HelpFormInfo from "../data/helpform.json";

export async function generateMetadata(): Promise<Metadata> {
    const { seo } = await getBracesExpressPageInfo();

    return {
        ...seo,
    };
}

const ExpressBracesPage = async () => {
    const { HeroInfo, BracesPhotosInfo, callToActions, helpFormInfo } =
        await getBracesExpressPageInfo();
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
            {callToActions.map((cta, index) => (
                <CallToAction {...cta} key={`${cta.title}-${index}`} />
            ))}
            <BracesPhotosSection
                {...(BracesPhotosInfo as BracesPhotosSectionProps)}
            />
            <HelpFormSection {...(helpFormInfo as HelpFormSectionProps)} />
        </Layout>
    );
};

export default ExpressBracesPage;
