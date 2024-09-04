import Layout from "@/modules/common/layouts/layout";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import Footer from "@/modules/common/components/footer";
import { Metadata, ResolvingMetadata } from "next";
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
import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "@/modules/common/components/lethelp-section";
import LetHelpInfo from "@/modules/case_studies/data/let-us-help.json";
import { notFound } from "next/navigation";

import { metadata } from "@/app/not-found";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
    const { slug } = params;

    const caseStudy = CaseStudiesDetailsInfo.items.find(
        (item) => item.slug === slug,
    );

    if (!caseStudy) {
        return metadata;
    }

    return {
        title: `${caseStudy?.title} | Dental Place`,
        description: `${caseStudy?.description}`,
    };
}

const CaseStudiesPage = ({ params }) => {
    const servicesDescription = ServiceDescriptionInfo.items.find(
        (item) => item.slug === params.slug,
    );

    const beenDone = BeenDoneInfo;

    const caseStudies = CaseStudiesDetailsInfo.items.find(
        (item) => item.slug === params.slug,
    );

    const letUsHelp = LetHelpInfo;

    if (!beenDone || !servicesDescription || !caseStudies || !letUsHelp) {
        return notFound();
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
            <LetUsHelpSection {...(letUsHelp as LetUsHelpSectionProps)} />
        </Layout>
    );
};

export default CaseStudiesPage;
