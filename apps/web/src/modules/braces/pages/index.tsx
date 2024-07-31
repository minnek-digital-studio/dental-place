import React from "react";
import Layout from "@/modules/common/layouts/layout";
import BracesPhotosSection, {
    type BracesPhotosSectionProps,
} from "@/modules/braces/components/braces-photos-section";
import BracesInfo from "@/modules/braces/data/braces-photos.json";
import type { Metadata } from "next";

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
            <BracesPhotosSection
                {...(BracesInfo as BracesPhotosSectionProps)}
            />
        </Layout>
    );
};

export default ExpressBracesPage;
