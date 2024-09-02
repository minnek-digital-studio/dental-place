"use server";

import {
    type GetServicesInfoQuery,
    GetServicesInfoDocument,
    type GetServiceBySlugQuery,
    GetServiceBySlugDocument,
} from "@/graphql/generated/graphql";

import {
    mapServicesData,
    mapServiceData,
} from "@/modules/common/utils/services.map";

import { getClient } from "@/modules/common/lib/apollo/apollo-client";

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
