"use server";

import {
    type GetServiceBySlugQuery,
    type GetServicePageInfoQuery,
    type GetServicesInfoQuery,
    GetServiceBySlugDocument,
    GetServicePageInfoDocument,
    GetServicesInfoDocument,
} from "@/graphql/generated/graphql";

import {
    mapServiceData,
    mapServicesData,
} from "@/modules/common/utils/services.map";

import { getClient } from "@/modules/common/lib/apollo/apollo-client";

import { CallToAction } from "@/modules/common/types";
import { ServiceSectionProps as ServicesSectionProps } from "@/modules/services/components/services-section";
import { ServiceSectionProps } from "../components/service-section";
import { ClinicSectionProps } from "../components/clinic-section";
import { mapSeo } from "@/modules/common/utils/seo.map";
import { Seo } from "@/modules/common/types";
import { CaseStudiesSectionProps } from "../components/case-studies-section";
import {
    mapCalltoActionsServices,
    mapCalltoActionsService,
    mapClinicSectionData,
    mapServicePageData,
    mapCallusActionsService,
} from "@/modules/services/utils/";

import { getCaseStudy } from "@/modules/common/actions/case-studie.action";

export type ServicePageInfo = {
    seo: Seo;
    servicesSectionInfo: ServicesSectionProps;
    clinicSectionInfo: ClinicSectionProps;
    callToActions: CallToAction[];
};

export type ServicePage = {
    seo: Seo;
    serviceSection: ServiceSectionProps;
    CaseStudiesInfo: CaseStudiesSectionProps;
    callToActions: CallToAction[];
};

export const getServices = async () => {
    const { data } = await getClient().query<GetServicesInfoQuery>({
        query: GetServicesInfoDocument,
    });

    const services = mapServicesData(data?.services);

    return services;
};

export const getServiceBySlug = async (
    slug: string,
): Promise<ServicePage | null> => {
    const { data } = await getClient().query<GetServiceBySlugQuery>({
        query: GetServiceBySlugDocument,
        variables: {
            slug,
        },
    });

    if (!data?.service) {
        return null;
    }
    const CaseStudies = await Promise.all(
        data.service?.serviceSettings?.caseStudies?.edges?.map(
            async ({ node: { slug } }) => await getCaseStudy(slug),
        ) ?? [],
    );

    const servicePage: ServicePage = {
        seo: mapSeo(data?.service?.seo),
        serviceSection: {
            ...mapServiceData(data?.service),
            callUsAction: (await mapCallusActionsService(data?.service))[0],
        },
        callToActions: await mapCalltoActionsService(data?.service),
        CaseStudiesInfo: {
            title: data.service?.serviceSettings?.caseStudieTitle || "",
            items: CaseStudies.map((caseStudie) => ({
                title: caseStudie.title || "",
                description: caseStudie.caseStudySettings?.summary || "",
                image: {
                    src: caseStudie.featuredImage?.node.sourceUrl || "",
                    alt: caseStudie.featuredImage?.node.altText || "",
                },
                button: {
                    link: caseStudie.caseStudySettings?.button?.link?.url || "",
                    text:
                        caseStudie.caseStudySettings?.button?.link?.title || "",
                    size:
                        caseStudie.caseStudySettings?.button?.[0]?.size ||
                        "link",
                    variant:
                        caseStudie.caseStudySettings?.button?.[0]?.variant ||
                        "link",
                },
            })),
        },
    };
    return servicePage;
};

export const getServicesPage = async (): Promise<ServicePageInfo> => {
    const { data } = await getClient().query<GetServicePageInfoQuery>({
        query: GetServicePageInfoDocument,
    });

    const servicePage: ServicePageInfo = {
        seo: mapSeo(data?.page?.seo),
        servicesSectionInfo: await mapServicePageData(data?.page),
        clinicSectionInfo: await mapClinicSectionData(data?.page),
        callToActions: await mapCalltoActionsServices(data?.page),
    };

    return servicePage;
};
