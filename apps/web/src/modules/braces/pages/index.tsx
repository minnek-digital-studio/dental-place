import React from "react";
import Layout from "@/modules/common/layouts/layout";
import type { Metadata } from "next";
import HelpFormSection, {
    type HelpFormSectionProps,
} from "../components/help-form-section";
import HelpFormInfo from "../data/helpform.json";

export const metadata: Metadata = {
    title: "Express Braces",
    description: "Express Braces",
};

const ExpressBracesPage = async () => {
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <HelpFormSection {...(HelpFormInfo as HelpFormSectionProps)} />
        </Layout>
    );
};

export default ExpressBracesPage;
