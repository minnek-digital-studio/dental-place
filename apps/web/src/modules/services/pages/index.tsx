import React from "react";
import Layout from "@/modules/common/layouts/layout";

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
            <h1>Services</h1>
            <ClinicSection {...(ClinicInfo as ClinicSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
