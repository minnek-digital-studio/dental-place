import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { getServices, getServiceBySlug } from "../actions/services.action";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection from "../components/service-section";
import { notFound } from "next/navigation";
import CaseStudiesInfo from "../data/case-studies.json";
import CaseStudiesSection, {
    type CaseStudiesSectionProps,
} from "../components/case-studies-section";

type Props = {
    params: { slug: string };
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    // read route params
    const { slug } = params;

    const service = await getServiceBySlug(slug);

    return {
        title: `${service?.title} | Dental Place`,
        description: `${service?.description}`,
    };
}

const ServicePage = async ({ params }) => {
    const { slug } = params;
    const service = await getServiceBySlug(slug);

    if (!service) {
        return notFound();
    }

    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <ServiceSection {...service} />

            <CaseStudiesSection
                {...(CaseStudiesInfo as CaseStudiesSectionProps)}
            />
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
