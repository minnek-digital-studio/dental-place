export const mapServicesPage = (page: any, services: any) => {
    const mappedPage = {
        title: page.title,
        servicesSection: {
            title: page.title,
            description: page.servicesPage.description,
            items: services.map((service: any) => mapServicePage(service.node)),
            button: {
                text: page.servicesPage.button.link.title,
                link: page.servicesPage.button.link.url,
                variant: page.servicesPage.button.variant,
                size: page.servicesPage.button.size,
                icon: {
                    name: page.servicesPage.button.icon.name,
                    size: page.servicesPage.button.icon.size,
                },
            },
            className: page.servicesPage.className,
        },
        letsHelp: {
            title: page.letsHelp?.title,
            description: page.letsHelp?.description,
            className: page.letsHelp?.className,
            img: {
                alt: page.letsHelp?.img.node.altText,
                src: page.letsHelp?.img.node.sourceUrl,
            },
            button: {
                text: page.letsHelp?.button.text,
                variant: page.letsHelp?.button.variant,
                link: page.letsHelp?.button.link.url,
                size: page.letsHelp?.button.size,
            },
        },
    };

    return mappedPage;
};

export const mapServicePage = (page: any) => {
    if (!page) return null;

    const mappedPage = {
        title: page.title,
        description: page.servicePage.description,
        button: {
            text: page.servicePage.button.link.title,
            link: page.servicePage.button.link.url,
            variant: page.servicePage.button.variant,
            size: page.servicePage.button.size,
        },
        icon: page.servicePage.button.icon.name,
        iconsize: page.servicePage.button.icon.size,
        className: page.servicePage.className,
        slug: page.slug,
        content: page.content,
        letsHelp: {
            title: page.letsHelp?.title,
            description: page.letsHelp?.description,
            className: page.letsHelp?.className,
            img: {
                alt: page.letsHelp?.img?.node?.altText,
                src: page.letsHelp?.img?.node?.sourceUrl,
            },
            button: {
                text: page.letsHelp?.button?.text,
                variant: page.letsHelp?.button?.variant,
                link: page.letsHelp?.button?.link?.url,
                size: page.letsHelp?.button?.size,
            },
        },
    };

    return mappedPage;
};
