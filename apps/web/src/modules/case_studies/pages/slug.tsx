import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import { Metadata, ResolvingMetadata } from "next";
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "@/modules/common/components/lethelp-section";
import LetHelpInfo from "@/modules/case_studies/data/let-us-help.json";
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
import { notFound } from "next/navigation";
import { getCaseStudyPage } from "@/modules/common/actions/case-studie.action";
import CallToAction from "@/modules/common/components/CallToAction";
import React from "react";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
    const { slug } = params;

    const response = await getCaseStudyPage(slug);

    if (!response) {
        return notFound();
    }
    return {
        ...response.seo,
    };
}
const CaseStudiesPage: React.FC<Props> = async ({ params }) => {
    const { slug } = params;

    const caseStudiesData = await getCaseStudyPage(slug);

    if (!caseStudiesData) {
        return notFound();
    }

    const { servicesDescription, beenDone, callToActions, caseStudies } =
        caseStudiesData;
    return (
        <Layout
            navbarVariant={{
                variant: "light-primary",
                align: "center",
                text: "md",
            }}
        >
            <CaseStudiesDetailsSection
                {...(caseStudies as CaseStudiesDetailsSectionProps)}
            />
            <ServiceDescriptionSection
                {...(servicesDescription as ServiceDescriptionSectionProps)}
            />
            <BeenDoneSection {...(beenDone as BeenDoneSectionProps)} />
            {callToActions.map((cta, index) => (
                <CallToAction key={`${index}-${cta.title}`} {...cta} />
            ))}
        </Layout>
    );
};

export default CaseStudiesPage;
