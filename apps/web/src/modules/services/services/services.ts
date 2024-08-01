import { fetchAPI } from "@/lib/api";
import { mapServicesPage } from "../utils";

export const getServicesPage = async (name = "services") => {
    const data = await fetchAPI(
        `
        query ServicePage($name: String!) {
            pages(where: {name: $name}) {
                edges {
                node {
                    title
                    databaseId
                    uri
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
                }
                }
            }
        }
    `,
        {
            variables: {
                name: name,
            },
        },
    );

    return mapServicesPage(data.pages.edges[0].node);
};
