import React from "react";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection, {
    type ServiceSectionProps,
} from "@/modules/services/components/services-section";
import ClinicSection, {
    type ClinicSectionProps,
} from "@/modules/services/components/clinic-section";
import CallToAction from "@/modules/common/components/CallToAction";
import { getServicesPage } from "../actions/services.action";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const { seo } = await getServicesPage();

    return {
        ...seo,
    };
}

const ServicesPage = async () => {
    const { servicesSectionInfo, clinicSectionInfo, callToActions } =
        await getServicesPage();
    return (
        <Layout
            navbarVariant={{
                variant: "info",
                align: "center",
                text: "md",
            }}
        >
            <ServiceSection {...(servicesSectionInfo as ServiceSectionProps)} />
            <ClinicSection {...(clinicSectionInfo as ClinicSectionProps)} />
            {callToActions?.map((cta, index) => (
                <CallToAction key={index} {...cta} />
            ))}
        </Layout>
    );
};

export default ServicesPage;
