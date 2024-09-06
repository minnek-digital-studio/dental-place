import Layout from "@/modules/common/layouts/layout";
import AskSection, {
    type AskSectionProps,
} from "@/modules/team/components/ask-section";
import { Metadata } from "next";
import OurTeamSection, {
    type OurTeamSectionProps,
} from "@/modules/team/components/team-section";
import { getTeamPageInfo } from "../actions/team.action";

import CallToAction from "@/modules/common/components/CallToAction";

export async function generateMetadata(): Promise<Metadata> {
    const { seo } = await getTeamPageInfo();

    return {
        ...seo,
    };
}

const TeamPage = async () => {
    const { TeamInfo, callToActions, FAQInfo } = await getTeamPageInfo();
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <OurTeamSection {...(TeamInfo as OurTeamSectionProps)} />
            {callToActions.map((cta, index) => (
                <CallToAction key={`${index}-${cta.title}`} {...cta} />
            ))}
            <AskSection {...(FAQInfo as AskSectionProps)} />
        </Layout>
    );
};

export default TeamPage;
