import React from "react";
import Layout from "@/modules/common/layouts/layout";
import AboutBracesSection, {
    type AboutBracesSectionProps,
} from "@/modules/braces/components/about-braces";
import AboutBracesInfo from "@/modules/braces/data/about-braces.json";

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
        </Layout>
    );
};

export default ExpressBracesPage;
