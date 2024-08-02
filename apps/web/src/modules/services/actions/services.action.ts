import { fetchAPI } from "@/lib/api";
import { mapServicesPage, mapServicePage } from "../utils";

export const getServicesPage = async (uri = "/services/") => {
    const data = await fetchAPI(
        `
            query ServicePage($uri: String) {
            services {
    edges {
      node {
        title
        slug
        servicePage {
          description
          button {
            link {
              url
              title
              target
            }
            icon {
              name
              size
            }
            variant
            size
          }
          className
        }
        slug
        content
        uri
      }
    }
  }
                pageBy(uri: $uri) {
                    title
                    databaseId
                    uri
                    slug
                    servicesPage {
                    button {
                        icon {
                        name
                        size
                        }
                        link {
                        target
                        title
                        url
                        }
                        variant
                        size
                    }
                    description
                    className
                    }
                    letsHelp {
                        title
                        description
                        className
                        img {
                            node {
                                altText
                                uri
                                sourceUrl(size: LARGE)
                            }
                        }
                        button {
                            text
                            variant
                            link {
                                url
                            }
                            size
                        }
                    }
                }
                }
    `,
        {
            variables: {
                uri,
            },
        },
    );
    return mapServicesPage(data.pageBy, data.services.edges);
};

export const getServices = async () => {
    const data = await fetchAPI(
        `
        query ServicePage {
            services {
                edges {
                    node {
                        title
                        slug
                        servicePage {
                            description
                            button {
                                link {
                                    url
                                    title
                                    target
                                }
                                icon {
                                    name
                                    size
                                }
                                variant
                                size
                            }
                            className
                        }
                        slug
                        content
                        uri
                    }
                }
            }
        }
    `,
    );

    const services = data.services.edges.map(({ node }) =>
        mapServicePage(node),
    );

    return services;
};

export const getServiceBySlug = async (slug: string) => {
    const data = await fetchAPI(
        `
       query ServiceBySlug($slug: String) {
            serviceBy(slug: $slug) {
                title
                slug
                letsHelp {
                        title
                        description
                        className
                        img {
                            node {
                                altText
                                uri
                                sourceUrl(size: LARGE)
                            }
                        }
                        button {
                            text
                            variant
                            link {
                                url
                            }
                            size
                        }
                    }
                servicePage {
                description
                button {
                    link {
                    url
                    title
                    target
                    }
                    icon {
                    name
                    size
                    }
                    variant
                    size
                }
                className
                }
                slug
                content
                uri
            }
            }
        `,
        {
            variables: {
                slug,
            },
        },
    );
    return mapServicePage(data.serviceBy);
};
