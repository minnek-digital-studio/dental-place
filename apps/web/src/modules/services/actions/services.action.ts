"use server";

import ServicesInfo from "../data/services.json";

export const getServices = async () => {
    const services = ServicesInfo.items;

    return services;
};

export const getServiceBySlug = async (slug: string) => {
    const service = ServicesInfo.items.find((service) => service.slug === slug);
    return service;
};
