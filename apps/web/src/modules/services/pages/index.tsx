import React from "react";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection, {
    type ServiceSectionProps,
} from "@/modules/services/components/services-section";
import ServicesInfo from "@/modules/services/data/services.json";

import ClinicSection, {
    type ClinicSectionProps,
} from "@/modules/services/components/clinic-section";
import ClinicInfo from "@/modules/services/data/clinic.json";

import LetUsHelpSection, {
    LetUsHelpSectionProps,
} from "@/modules/common/components/lethelp-section";

import LetHelpInfo from "@/modules/services/data/let-us-help.json";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Dental Place",
    description:
        "Dental Place offers a wide range of dental services to help you achieve a healthy smile.",
};

const ServicesPage = async () => {
    return (
        <Layout
            navbarVariant={{
                variant: "info",
            }}
        >
            <ServiceSection {...(ServicesInfo as ServiceSectionProps)} />
            <ClinicSection {...(ClinicInfo as ClinicSectionProps)} />
            <LetUsHelpSection {...(LetHelpInfo as LetUsHelpSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
