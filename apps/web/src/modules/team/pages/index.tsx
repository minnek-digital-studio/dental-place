import React from "react";
import Layout from "@/modules/common/layouts/layout";
import OurTeamSection, {
    type OurTeamSectionProps,
} from "../components/team-section";
import TeamInfo from "../data/ourTeam.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet the team that makes Dental Place possible",
};

const ServicesPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <OurTeamSection {...(TeamInfo as OurTeamSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
