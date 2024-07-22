import React from "react";
import Layout from "@/modules/common/layouts/layout";
import ServiceSection, {
    type ServiceSectionProps,
} from "@/modules/services/components/services-section";
import ServicesInfo from "@/modules/services/data/services.json";

const ServicesPage = () => {
    return (
        <Layout
            navbarVariant={{
                variant: "info",
            }}
        >
            <ServiceSection {...(ServicesInfo as ServiceSectionProps)} />
        </Layout>
    );
};

export default ServicesPage;
