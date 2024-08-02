import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { GetStaticPaths } from "next";
import { getServices, getServiceBySlug } from "../actions/services.action";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection from "../components/service-section";

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

    return (
        <Layout
            navbarVariant={{
                variant: "secondary",
            }}
        >
            <ServiceSection {...service} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const services = await getServices();

    const paths = services.map((service) => ({
        params: { slug: service.slug },
    }));

    return { paths, fallback: false };
};

export default ServicePage;
