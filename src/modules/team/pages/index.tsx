import { config } from "@/config/constants";
import CallToAction from "@/modules/common/components/CallToAction";
import Layout from "@/modules/common/layouts/layout";
import { getTeamPageInfo } from "@/modules/team/actions/team.action";
import AskSection, {
    type AskSectionProps,
} from "@/modules/team/components/ask-section";
import OurTeamSection, {
    type OurTeamSectionProps,
} from "@/modules/team/components/team-section";
import type { Metadata } from "next";

export const dynamic = config.DYNAMIC_PAGE_GENERATION
    ? "force-dynamic"
    : "auto";

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
                text: "md",
                align: "center",
            }}
        >
            <OurTeamSection {...(TeamInfo as OurTeamSectionProps)} />
            {callToActions.map((cta) => (
                <CallToAction key={cta.title} {...cta} />
            ))}
            <AskSection {...(FAQInfo as AskSectionProps)} />
        </Layout>
    );
};

export default TeamPage;
