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
import { ServiceSectionProps } from "@/modules/services/components/services-section";
import { ClinicSectionProps } from "../components/clinic-section";
import { mapSeo } from "@/modules/common/utils/seo.map";
import { Seo } from "@/modules/common/types";

import {
    mapCalltoActions,
    mapClinicSectionData,
    mapServicePageData,
} from "@/modules/services/utils/";

export type ServicePageInfo = {
    seo: Seo;
    servicesSectionInfo: ServiceSectionProps;
    clinicSectionInfo: ClinicSectionProps;
    callToActions: CallToAction[];
};

export const getServices = async () => {
    const { data } = await getClient().query<GetServicesInfoQuery>({
        query: GetServicesInfoDocument,
    });

    const services = mapServicesData(data?.services);

    return services;
};

export const getServiceBySlug = async (slug: string) => {
    const { data } = await getClient().query<GetServiceBySlugQuery>({
        query: GetServiceBySlugDocument,
        variables: {
            slug,
        },
    });

    const service = mapServiceData(data?.service);

    return service;
};

export const getServicePage = async (): Promise<ServicePageInfo> => {
    const { data } = await getClient().query<GetServicePageInfoQuery>({
        query: GetServicePageInfoDocument,
    });

    const servicePage: ServicePageInfo = {
        seo: mapSeo(data?.page?.seo),
        servicesSectionInfo: await mapServicePageData(data?.page),
        clinicSectionInfo: await mapClinicSectionData(data?.page),
        callToActions: await mapCalltoActions(data?.page),
    };

    return servicePage;
};
