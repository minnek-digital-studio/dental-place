import React from "react";
import Layout from "@/modules/common/layouts/layout";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/braces/components/hero-section";
import HeroInfo from "@/modules/braces/data/hero.json";
import WhyBracesSection, {
    type WhyBracesSectionProps,
} from "@/modules/braces/components/why-braces-section";
import WhyBracesInfo from "@/modules/braces/data/why-braces.json";
import AboutBracesSection, {
    type AboutBracesSectionProps,
} from "@/modules/braces/components/about-braces";
import AboutBracesInfo from "@/modules/braces/data/about-braces.json";
import BracesPhotosSection, {
    type BracesPhotosSectionProps,
} from "@/modules/braces/components/braces-photos-section";
import BracesInfo from "@/modules/braces/data/braces-photos.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Express Braces | Dental Place",
    description:
        "Express Braces are a fast and effective way to straighten your teeth.",
};

const ExpressBracesPage = async () => {
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
            <AboutBracesSection
                {...(AboutBracesInfo as AboutBracesSectionProps)}
            />
            <WhyBracesSection {...(WhyBracesInfo as WhyBracesSectionProps)} />
            <BracesPhotosSection
                {...(BracesInfo as BracesPhotosSectionProps)}
            />
        </Layout>
    );
};

export default ExpressBracesPage;
