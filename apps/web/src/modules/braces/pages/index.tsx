import React from "react";
import Layout from "@/modules/common/layouts/layout";
import WhyBracesSection, {
    type WhyBracesSectionProps,
} from "@/modules/braces/components/why-braces-section";
import WhyBracesInfo from "@/modules/braces/data/why-braces.json";

const ExpressBracesPage = async () => {
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <WhyBracesSection {...(WhyBracesInfo as WhyBracesSectionProps)} />
        </Layout>
    );
};

export default ExpressBracesPage;
