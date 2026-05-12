import { type GetHomePageQuery } from "@/graphql/generated/graphql";
import { getCallToAction } from "@/modules/common/actions/callToActions.action";
import { getReview } from "@/modules/common/actions/review.action";
import type { Icon, MediaType } from "@/modules/common/types";
import { type HomePageInfo } from "@/modules/home/actions/home.action";
import { type ArsSectionProps } from "@/modules/home/components/ars-section";
import InstagramInfo from "@/modules/home/data/instagram.json";
import { getServices } from "@/modules/services/actions/services.action";
import { type ButtonVariants } from "@minnek/ui/components/button";
import { type IconsName } from "@minnek/ui/components/icons/index";

export const mapArsData = (data: GetHomePageQuery["page"]): ArsSectionProps => {
    const arsData = data?.homePageSettings?.arsSection;
    return {
        title: arsData?.title || "",
        images:
            arsData?.arsImages?.edges?.map(({ node: image }) => ({
                src: image?.sourceUrl || "",
                alt: image?.altText || "",
            })) || [],
    };
};

export const mapCalltoActions = async (
    data: GetHomePageQuery["page"],
): Promise<HomePageInfo["callToActions"]> => {
    return await Promise.all(
        (data?.homePageSettings?.callToActions?.edges || []).map(
            async ({ node: cta }) => await getCallToAction(cta.id),
        ),
    );
};

export const mapReviewData = async (
    data: GetHomePageQuery["page"],
): Promise<HomePageInfo["ReviewsInfo"]> => {
    return {
        title: data?.homePageSettings?.reviewSection?.title || "",
        description: data?.homePageSettings?.reviewSection?.description || "",
        button: {
            text:
                data?.homePageSettings?.reviewSection?.button?.link?.title ||
                "",
            link:
                data?.homePageSettings?.reviewSection?.button?.link?.url || "",
            variant: (data?.homePageSettings?.reviewSection?.button
                ?.variant?.[0] || "default") as ButtonVariants["variant"],
            size: (data?.homePageSettings?.reviewSection?.button?.size?.[0] ||
                "default") as ButtonVariants["size"],
        },
        items: await Promise.all(
            (data?.homePageSettings?.reviewSection?.reviews?.edges || []).map(
                async ({ node: review }) => await getReview(review.id),
            ),
        ),
    };
};

export const mapServiceData = async (
    data: GetHomePageQuery["page"],
): Promise<HomePageInfo["ServicesInfo"]> => {
    const serviceData = data?.homePageSettings?.serviceSection;

    const services = await getServices();

    return {
        title: serviceData?.title || "",
        description: serviceData?.description || "",
        button: {
            text: serviceData?.button?.link?.title || "",
            link: serviceData?.button?.link?.url || "",
            variant: (serviceData?.button?.variant?.[0] ||
                "default") as ButtonVariants["variant"],
            size: (serviceData?.button?.size?.[0] ||
                "default") as ButtonVariants["size"],
        },
        items: services,
    };
};

export const mapPresentationData = (
    data: GetHomePageQuery["page"],
): HomePageInfo["PresentationInfo"] => {
    const presentationData = data?.homePageSettings?.presentation;

    return {
        title: presentationData?.title || "",
        description: presentationData?.description || "",
        img: {
            src: presentationData?.image?.img?.node.sourceUrl || "",
            alt: presentationData?.image?.img?.node.altText || "",
            className: presentationData?.image?.className || "",
        },
        mediaType: (presentationData?.mediaType as MediaType) || "image",
        video: {
            src: presentationData?.video?.video?.node?.mediaItemUrl || "",
            alt: presentationData?.video?.video?.node?.altText || "",
            className: presentationData?.video?.className || "",
        },
        card: {
            buttons:
                presentationData?.card?.button?.map((button) => ({
                    text: button?.link?.title || "",
                    link: button?.link?.url || "",
                    icon: {
                        name: (button?.icon?.name || "Activity") as IconsName,
                        size: button?.icon?.size || 24,
                        position: (button?.icon?.position?.[0] ||
                            "left") as Icon["position"],
                    },
                    size: (button?.size?.[0] ||
                        "default") as ButtonVariants["size"],
                    variant: (button?.variant?.[0] ||
                        "default") as ButtonVariants["variant"],
                    className: button?.className || "",
                })) || [],
            title: presentationData?.card?.title || "",
        },
        className: presentationData?.className || "",
    };
};

export const mapInstagramData = (
    data: GetHomePageQuery["page"],
): HomePageInfo["InstagramInfo"] => {
    const instagramData = data?.homePageSettings?.instagram;

    const { __typename, ...carouselOptions } =
        instagramData?.carouselOptions || {};
    console.log(carouselOptions);
    return {
        title: instagramData?.title || "",
        icon: {
            name: (instagramData?.icon?.name ||
                "InstagramColored") as IconsName,
            size: instagramData?.icon?.size || 25,
        },
        button: {
            text: instagramData?.button?.link?.title || "",
            link: instagramData?.button?.link?.url || "",
            variant: (instagramData?.button?.variant?.[0] ||
                "link") as ButtonVariants["variant"],
            size: (instagramData?.button?.size?.[0] ||
                "link") as ButtonVariants["size"],
        },
        carouselPost: {
            images:
                carouselOptions?.images
                    ?.filter(
                        (item): item is NonNullable<typeof item> =>
                            item !== null && item?.isvisible !== false,
                    )
                    .map(({ image, isvisible }) => ({
                        alt: image?.node?.altText ?? "",
                        src: image?.node?.sourceUrl ?? "",
                        isVisible: isvisible ?? true,
                    })) ?? [],
            autoScrollOptions: carouselOptions as any,
        },
    };
};
