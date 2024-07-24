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

const ServicesPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "info",
            }}
            className="mb-10"
        >
            <ServiceSection {...(ServicesInfo as ServiceSectionProps)} />
            <ClinicSection {...(ClinicInfo as ClinicSectionProps)} />
            <LetUsHelpSection {...(LetHelpInfo as LetUsHelpSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
