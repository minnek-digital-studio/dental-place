export const mapServicesPage = (page: any) => {
    const mappedPage = {
        title: page.title,
        letsHelp: {
            title: page.letsHelp.title,
            description: page.letsHelp.description,
            className: page.letsHelp.className,
            img: {
                alt: page.letsHelp.img.node.altText,
                src: page.letsHelp.img.node.sourceUrl,
            },
            button: {
                text: page.letsHelp.button.text,
                variant: page.letsHelp.button.variant,
                link: page.letsHelp.button.link.url,
                size: page.letsHelp.button.size,
            },
        },
    };

    return mappedPage;
};
