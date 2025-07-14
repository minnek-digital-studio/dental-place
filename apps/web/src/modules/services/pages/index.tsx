import CallToAction from "@/modules/common/components/CallToAction";
import Layout from "@/modules/common/layouts/layout";
import { getServicesPage } from "@/modules/services/actions/services.action";
import ClinicSection, {
    type ClinicSectionProps,
} from "@/modules/services/components/clinic-section";
import ServiceSection, {
    type ServiceSectionProps,
} from "@/modules/services/components/services-section";

import type { Metadata } from "next";

export const dynamic = "force-dynamic";

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
