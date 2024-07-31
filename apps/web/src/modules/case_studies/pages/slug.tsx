import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import { Metadata } from "next";
import ServiceDescriptionSection, {
    ServiceDescriptionSectionProps,
} from "../components/service-description";
import ServiceDescriptionInfo from "@/modules/case_studies/data/services-description.json";
import BeenDoneSection, { BeenDoneSectionProps } from "../components/been-done";
import BeenDoneInfo from "@/modules/case_studies/data/been-done.json";
import CaseStudiesDetailsSection, {
    CaseStudiesDetailsSectionProps,
} from "../components/case-studies-details-section";
import CaseStudiesDetailsInfo from "@/modules/case_studies/data/caseStudiesDetails.json";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "Meet the team that makes Dental Place possible",
};

const CaseStudiesPage = ({ params }) => {
    const servicesDescription = ServiceDescriptionInfo.items.find(
        (item) => item.slug === params.slug,
    );

    const beenDone = BeenDoneInfo.items.find(
        (item) => item.slug === params.slug,
    );

    const caseStudies = CaseStudiesDetailsInfo.items.find(
        (item) => item.slug === params.slug,
    );

    if (!beenDone || !servicesDescription || !caseStudies) {
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
            <ServiceDescriptionSection
                {...(servicesDescription as ServiceDescriptionSectionProps)}
            />
            <BeenDoneSection {...(beenDone as BeenDoneSectionProps)} />
        </Layout>
    );
};

export default CaseStudiesPage;
