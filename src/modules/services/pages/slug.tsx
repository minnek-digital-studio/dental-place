import { config } from "@/config/constants";
import CallToAction from "@/modules/common/components/CallToAction";
import Layout from "@/modules/common/layouts/layout";
import {
    getServiceBySlug,
    getServices,
} from "@/modules/services/actions/services.action";
import CaseStudiesSection, {
    type CaseStudiesSectionProps,
} from "@/modules/services/components/case-studies-section";
import ServiceSection, {
    type ServiceSectionProps,
} from "@/modules/services/components/service-section";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
    params: { slug: string };
};

export const dynamic = config.DYNAMIC_PAGE_GENERATION
    ? "force-dynamic"
    : "auto";

export async function generateMetadata(
    { params }: Props,
    _parent: ResolvingMetadata,
): Promise<Metadata> {
    const { slug } = params;

    const response = await getServiceBySlug(slug);

    if (!response) {
        return notFound();
    }
    return {
        ...response.seo,
    };
}

const ServicePage: React.FC<Props> = async ({ params }) => {
    const { slug } = params;
    const response = await getServiceBySlug(slug);

    if (!response) {
        return notFound();
    }

    const { serviceSection, CaseStudiesInfo, callToActions } = response;
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
                align: "center",
                text: "md",
            }}
        >
            <ServiceSection {...(serviceSection as ServiceSectionProps)} />
            <CaseStudiesSection
                {...(CaseStudiesInfo as CaseStudiesSectionProps)}
            />
            {callToActions.map((cta, index) => (
                <CallToAction key={`${index}-${cta.title}`} {...cta} />
            ))}
        </Layout>
    );
};

export async function generateStaticParams() {
    const services = await getServices();

    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default ServicePage;
