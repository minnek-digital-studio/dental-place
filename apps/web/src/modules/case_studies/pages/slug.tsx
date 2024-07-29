import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import { Metadata } from "next";
import CaseStudiesDetailsSection, {
    CaseStudiesDetailsSectionProps,
} from "../components/case-studies-details-section";
import CaseStudiesDetailsInfo from "@/modules/case_studies/data/caseStudiesDetails.json";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "Meet the team that makes Dental Place possible",
};

const CaseStudiesPage = ({ params }) => {
    const caseStudies = CaseStudiesDetailsInfo.items.find(
        (item) => item.slug === params.slug,
    );

    if (!caseStudies) {
        return "Case study not found";
    }

    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
            }}
        >
            <CaseStudiesDetailsSection
                {...(caseStudies as CaseStudiesDetailsSectionProps)}
            />
        </Layout>
    );
};

export default CaseStudiesPage;
