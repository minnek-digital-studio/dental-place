import React from "react";
import Layout from "@/modules/common/layouts/layout";
import type { Metadata } from "next";
import BracesPhotosSection, {
    type BracesPhotosSectionProps,
} from "@/modules/braces/components/braces-photos-section";
import BracesInfo from "@/modules/braces/data/braces-photos.json";
import WhyBracesSection, {
    type WhyBracesSectionProps,
} from "@/modules/braces/components/why-braces-section";
import WhyBracesInfo from "@/modules/braces/data/why-braces.json";
import AboutBracesSection, {
    type AboutBracesSectionProps,
} from "@/modules/braces/components/about-braces";
import AboutBracesInfo from "@/modules/braces/data/about-braces.json";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/braces/components/hero-section";
import HeroInfo from "@/modules/braces/data/hero.json";
import HelpFormSection, {
    type HelpFormSectionProps,
} from "../components/help-form-section";
import HelpFormInfo from "../data/helpform.json";

export const metadata: Metadata = {
    title: "Express Braces",
    description: "Express Braces",
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
            <HelpFormSection {...(HelpFormInfo as HelpFormSectionProps)} />
        </Layout>
    );
};

export default ExpressBracesPage;
