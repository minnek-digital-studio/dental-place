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

import CallToAction from "@/modules/common/components/CallToAction";
import { getServices } from "../actions/services.action";

import { getServicePage } from "../actions/services.action";

const ServicesPage = async () => {
    const { servicesSectionInfo, clinicSectionInfo, callToActions } =
        await getServicePage();
    return (
        <Layout
            navbarVariant={{
                variant: "info",
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
