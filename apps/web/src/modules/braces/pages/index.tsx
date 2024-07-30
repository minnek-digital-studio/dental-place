import React from "react";
import Layout from "@/modules/common/layouts/layout";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/braces/components/hero-section";
import HeroInfo from "@/modules/braces/data/hero.json";
const ExpressBracesPage = async () => {
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
        </Layout>
    );
};

export default ExpressBracesPage;
