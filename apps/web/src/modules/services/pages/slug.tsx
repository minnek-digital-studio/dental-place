import React from "react";
import { getServices, getServiceBySlug } from "../actions/services.action";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection, {
    type ServiceSectionProps,
} from "../components/service-section";
import CaseStudiesSection, {
    type CaseStudiesSectionProps,
} from "../components/case-studies-section";
import { notFound } from "next/navigation";
import CallToAction from "@/modules/common/components/CallToAction";

import type { Metadata, ResolvingMetadata } from "next";
type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
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
