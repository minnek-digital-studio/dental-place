import { PostTypeSeo } from "@/graphql/generated/graphql";
import { Seo } from "../types";

export const mapSeo = (data?: PostTypeSeo | null): Seo => ({
    title: data?.title || "",
    description: data?.metaDesc || "",
    keywords: data?.metaDesc || "",
    openGraph: {
        title: data?.title || "",
        description: data?.metaDesc || "",
    },
});
