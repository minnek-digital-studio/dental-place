import { PostTypeSeoFragmentFragment } from "@/graphql/generated/graphql";
import { Seo } from "../types";

export type PostTypeSeo = PostTypeSeoFragmentFragment;

export const mapSeo = (data?: PostTypeSeo | null): Seo => ({
    title: data?.title || "",
    description: data?.metaDesc || "",
    keywords: data?.metaDesc || "",
    openGraph: {
        title: data?.title || "",
        description: data?.metaDesc || "",
    },
});
