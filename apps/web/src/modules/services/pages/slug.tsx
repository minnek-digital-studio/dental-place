import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { getServices, getServiceBySlug } from "../actions/services.action";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection from "../components/service-section";
import LetUsHelpSection from "@/modules/common/components/lethelp-section";
import { notFound } from "next/navigation";

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
    const data = await getServiceBySlug(slug);

    if (!data) {
        return notFound();
    }

    const { letsHelp, ...service } = data;
    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <ServiceSection {...service} />
            <LetUsHelpSection {...letsHelp} />
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
