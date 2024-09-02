import {
    type GetBracesExpressPageInfoQuery,
    GetBracesExpressPageInfoDocument,
} from "@/graphql/generated/graphql";

import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { CallToAction, Seo } from "@/modules/common/types";
import {
    mapReviewData,
    mapServiceData,
    mapPresentationData,
    mapInstagramData,
    mapArsData,
} from "@/modules/home/utils/sections.map";
import { mapSeo } from "@/modules/common/utils/seo.map";
import { type HeroSectionProps } from "@/modules/braces/components/hero-section";
import HeroInfo from "@/modules/braces/data/hero.json";
import { type WhyBracesSectionProps } from "@/modules/braces/components/why-braces-section";
import WhyBracesInfo from "@/modules/braces/data/why-braces.json";
import { type AboutBracesSectionProps } from "@/modules/braces/components/about-braces";
import AboutBracesInfo from "@/modules/braces/data/about-braces.json";
import { type BracesPhotosSectionProps } from "@/modules/braces/components/braces-photos-section";
import BracesInfo from "@/modules/braces/data/braces-photos.json";

import { ButtonVariants } from "@minnek/ui/components/button";
import { IconsName } from "@minnek/ui/components/icons/index";
import { getCallToAction } from "@/modules/common/actions/callToActions.action";

export type BracesExpressPageInfo = {
    seo: Seo;
    HeroInfo: HeroSectionProps;
    callToActions: CallToAction[];
    BracesPhotosInfo: BracesPhotosSectionProps;
};

export const getBracesExpressPageInfo =
    async (): Promise<BracesExpressPageInfo> => {
        const client = getClient();
        const { data } = await client.query<GetBracesExpressPageInfoQuery>({
            query: GetBracesExpressPageInfoDocument,
        });

        return {
            seo: mapSeo(data?.page?.seo),
            HeroInfo: mapHeroData(data?.page),
            callToActions: await mapCalltoActions(data?.page),
            BracesPhotosInfo: mapBracesPhotosData(data?.page),
        };
    };

export const mapBracesPhotosData = (
    data: GetBracesExpressPageInfoQuery["page"],
): BracesExpressPageInfo["BracesPhotosInfo"] => {
    const bracesPhotosData = data?.bracesExpressPageSettings?.gallerySection;
    return {
        title: bracesPhotosData?.title || "",
        items:
            bracesPhotosData?.images?.edges.map(({ node: img }) => ({
                alt: img?.altText || "",
                src: img?.sourceUrl || "",
            })) || [],
    };
};

export const mapHeroData = (
    data: GetBracesExpressPageInfoQuery["page"],
): BracesExpressPageInfo["HeroInfo"] => {
    const heroData = data?.bracesExpressPageSettings?.heroSection;
    return {
        title: heroData?.title || "",
        description: heroData?.description || "",
        button: {
            text: heroData?.button?.link?.title || "",
            link: heroData?.button?.link?.url || "",
            variant:
                (heroData?.button?.variant?.[0] as ButtonVariants["variant"]) ||
                "dark",
            size:
                (heroData?.button?.size?.[0] as ButtonVariants["size"]) || "lg",
            className: heroData?.button?.className || "",
            icon: {
                name: (heroData?.button?.icon?.name as IconsName) || "",
                size: heroData?.button?.icon?.size || 25,
                color: heroData?.button?.icon?.color || "#000000",
            },
        },
        images:
            heroData?.images?.map((node) => ({
                className: node?.className || "",
                src: node?.image?.node.sourceUrl || "",
                alt: node?.image?.node.altText || "",
            })) || [],
        className: heroData?.className || "",
    };
};

export const mapCalltoActions = async (
    data: GetBracesExpressPageInfoQuery["page"],
): Promise<BracesExpressPageInfo["callToActions"]> => {
    return await Promise.all(
        (data?.bracesExpressPageSettings?.callToActions?.edges || []).map(
            async ({ node: cta }) => await getCallToAction(cta.id),
        ),
    );
};
