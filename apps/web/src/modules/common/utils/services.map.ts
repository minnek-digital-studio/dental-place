import {
    type GetServicesInfoQuery,
    type GetServiceBySlugQuery,
} from "@/graphql/generated/graphql";
import { ServiceSectionProps } from "@/modules/home/components/services-section";
import { type ImageType } from "../types";

export const mapServicesData = (data: GetServicesInfoQuery["services"]) => {
    const items = data?.edges.map(({ node: service }) => ({
        id: service?.id as string,
        title: service?.title as string,
        summary: service?.serviceSettings?.summary as string,
        button: {
            text: service?.serviceSettings?.button?.link?.title as string,
            link: service?.serviceSettings?.button?.link?.url as string,
            variant: service?.serviceSettings?.button?.variant[0] as string,
            size: service?.serviceSettings?.button?.size[0] as string,
        },
        icon: service?.serviceSettings?.icon as string,
        slug: service?.slug as string,
        className: service?.serviceSettings?.className as string,
    })) as ServiceSectionProps["items"];

    return items;
};

export const mapServiceData = (data: GetServiceBySlugQuery["service"]) => {
    const service = {
        button: {
            text: data?.serviceSettings?.button?.link?.title as string,
            link: data?.serviceSettings?.button?.link?.url as string,
            variant: data?.serviceSettings?.button?.variant[0] as string,
            size: data?.serviceSettings?.button?.size[0] as string,
        },
        description: data?.serviceSettings?.description as string,
        summary: data?.serviceSettings?.summary as string,
        icon: data?.serviceSettings?.icon as string,
        editor: data?.serviceSettings?.editor as string,
        img: {
            src: data?.serviceSettings?.img?.node?.link as string,
            alt: data?.serviceSettings?.img?.node?.altText as string,
        } as ImageType,
        gallery: data?.serviceSettings?.gallery?.edges.map(({ node: img }) => ({
            alt: img?.altText as string,
            src: img?.link as string,
        })) as ImageType[],
        id: data?.id as string,
        title: data?.title as string,
        slug: data?.slug as string,
        className: data?.serviceSettings?.className as string,
    };

    return service;
};
