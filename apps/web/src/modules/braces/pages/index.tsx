import React from "react";
import Layout from "@/modules/common/layouts/layout";
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
