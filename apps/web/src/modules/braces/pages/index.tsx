import React from "react";
import Layout from "@/modules/common/layouts/layout";
import BracesPhotosSection, {
    type BracesPhotosSectionProps,
} from "@/modules/braces/components/braces-photos-section";
import BracesInfo from "@/modules/braces/data/braces-photos.json";
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
            <BracesPhotosSection
                {...(BracesInfo as BracesPhotosSectionProps)}
            />
        </Layout>
    );
};

export default ExpressBracesPage;
