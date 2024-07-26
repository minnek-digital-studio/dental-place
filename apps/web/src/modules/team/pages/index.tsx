import Layout from "@/modules/common/layouts/layout";
import HeroSection, {
    type HeroSectionProps,
} from "@/modules/team/components/hero-section";
import HeroInfo from "@/modules/team/data/hero.json";
import AskSection, {
    type AskSectionProps,
} from "@/modules/team/components/ask-section";
import AskInfo from "@/modules/team/data/asks.json";
import { Metadata } from "next";
import OurTeamSection, {
    type OurTeamSectionProps,
} from "@/modules/team/components/team-section";
import TeamInfo from "@/modules/team/data/ourTeam.json";

export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet the team that makes Dental Place possible",
};

const TeamPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <OurTeamSection {...(TeamInfo as OurTeamSectionProps)} />
            <HeroSection {...(HeroInfo as HeroSectionProps)} />
            <AskSection {...(AskInfo as AskSectionProps)} />
        </Layout>
    );
};

export default TeamPage;
