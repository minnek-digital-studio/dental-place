import React from "react";
import Layout from "@/modules/common/layouts/layout";

import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "@/modules/common/components/lethelp-section";

import LetHelpInfo from "@/modules/services/data/let-us-help.json";

const ServicesPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "info",
            }}
        >
            <h1>Services</h1>
            <LetUsHelpSection {...(LetHelpInfo as LetUsHelpSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
