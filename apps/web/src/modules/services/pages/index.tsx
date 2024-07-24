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

const ServicesPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "info",
            }}
        >
            <ServiceSection {...(ServicesInfo as ServiceSectionProps)} />
            <ClinicSection {...(ClinicInfo as ClinicSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
