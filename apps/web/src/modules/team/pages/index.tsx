import React from "react";
import Layout from "@/modules/common/layouts/layout";
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
            <AskSection {...(AskInfo as AskSectionProps)} />
        </Layout>
    );
};

export default TeamPage;
