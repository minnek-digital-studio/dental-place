import { config } from "@/config/constants";
import BeenDoneSection, {
    type BeenDoneSectionProps,
} from "@/modules/case-studies/components/been-done";
import CaseStudiesDetailsSection, {
    type CaseStudiesDetailsSectionProps,
} from "@/modules/case-studies/components/case-studies-details-section";
import ServiceDescriptionSection, {
    type ServiceDescriptionSectionProps,
} from "@/modules/case-studies/components/service-description";
import { getCaseStudyPage } from "@/modules/common/actions/case-studie.action";
import CallToAction from "@/modules/common/components/CallToAction";
import Layout from "@/modules/common/layouts/layout";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

// oxlint-disable-next-line react-doctor/only-export-components
export const dynamic = config.DYNAMIC_PAGE_GENERATION
    ? "force-dynamic"
    : "auto";

type Props = {
    params: Promise<{ slug: string }>;
};

// oxlint-disable-next-line react-doctor/only-export-components
export async function generateMetadata(
    { params }: Props,
    _parent: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
    const { slug } = await params;

    const response = await getCaseStudyPage(slug);

    if (!response) {
        return notFound();
    }
    return {
        ...response.seo,
    };
}
const CaseStudiesPage: React.FC<Props> = async ({ params }) => {
    const { slug } = await params;

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
            {callToActions.map((cta) => (
                <CallToAction key={cta.title} {...cta} />
            ))}
        </Layout>
    );
};

export default CaseStudiesPage;
