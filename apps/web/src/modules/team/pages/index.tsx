import React from "react";
import Layout from "@/modules/common/layouts/layout";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/team/components/hero-section";
import AskInfo from "@/modules/team/data/hero.json";

const TeamPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <HeroSection {...(AskInfo as HeroSectionProps)} />
        </Layout>
    );
};

export default TeamPage;
