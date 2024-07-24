import React from "react";
import Layout from "@/modules/common/layouts/layout";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/team/components/hero-section";
import HeroInfo from "@/modules/team/data/hero.json";
import AskSection, {
    type AskSectionProps,
} from "@/modules/team/components/ask-section";
import AskInfo from "@/modules/team/data/asks.json";

const TeamPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
            <AskSection {...(AskInfo as AskSectionProps)} />
        </Layout>
    );
};

export default TeamPage;
