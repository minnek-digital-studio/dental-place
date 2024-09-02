import { ServiceSectionProps } from "@/modules/services/components/services-section";
import { ClinicSectionProps } from "../components/clinic-section";
import { GetServicePageInfoQuery } from "@/graphql/generated/graphql";

import {
    getServices,
    ServicePageInfo,
} from "@/modules/services/actions/services.action";

import { getCallToAction } from "@/modules/common/actions/callToActions.action";

export const mapServicePageData = async (
    data: GetServicePageInfoQuery["page"],
): Promise<ServiceSectionProps> => {
    const serviceData = data?.servicePageSettings?.servicesSection;

    return {
        title: serviceData?.title || "",
        description: serviceData?.description || "",
        className: serviceData?.className || "",
        items: await getServices(),
    };
};

export const mapClinicSectionData = async (
    data: GetServicePageInfoQuery["page"],
): Promise<ClinicSectionProps> => {
    const clinicData = data?.servicePageSettings?.clinicSection;

    const clinicSection: ClinicSectionProps = {
        title: clinicData?.title || "",
        items:
            clinicData?.imagesClinic?.edges?.map(({ node: item }) => ({
                src: item?.sourceUrl || "",
                alt: item?.altText || "",
            })) || [],
    };

    return clinicSection;
};

export const mapCalltoActions = async (
    data: GetServicePageInfoQuery["page"],
): Promise<ServicePageInfo["callToActions"]> => {
    return await Promise.all(
        (data?.servicePageSettings?.callToActions?.edges || []).map(
            async ({ node: cta }) => await getCallToAction(cta.id),
        ),
    );
};
