import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import { Metadata } from "next";
import BeenDoneSection, { BeenDoneSectionProps } from "../components/been-done";
import BeenDoneInfo from "@/modules/case_studies/data/been-done.json";
import CaseStudiesDetailsSection, {
    CaseStudiesDetailsSectionProps,
} from "../components/case-studies-details-section";
import CaseStudiesDetailsInfo from "@/modules/case_studies/data/caseStudiesDetails.json";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "Meet the team that makes Dental Place possible",
};

const CaseStudiesPage = ({ params }) => {
    const beenDone = BeenDoneInfo.items.find(
        (item) => item.slug === params.slug,
    );

    const caseStudies = CaseStudiesDetailsInfo.items.find(
        (item) => item.slug === params.slug,
    );

    if (!caseStudies || !beenDone) {
        notFound();
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
            <BeenDoneSection {...(beenDone as BeenDoneSectionProps)} />
        </Layout>
    );
};

export default CaseStudiesPage;
