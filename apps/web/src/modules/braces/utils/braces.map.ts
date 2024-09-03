import { type GetBracesExpressPageInfoQuery } from "@/graphql/generated/graphql";

import { ButtonVariants } from "@minnek/ui/components/button";
import { IconsName } from "@minnek/ui/components/icons/index";
import { getCallToAction } from "@/modules/common/actions/callToActions.action";
import { InputVariants } from "@minnek/ui/components/input";
import { FormTypeKeys } from "@/modules/braces/components/help-form";

import { BracesExpressPageInfo } from "@/modules/braces/actions/braces.actions";

export const mapHelpFormInfo = (
    data: GetBracesExpressPageInfoQuery["page"],
): BracesExpressPageInfo["helpFormInfo"] => {
    const helpFormData = data?.bracesExpressPageSettings?.helpFormSection;
    return {
        id: helpFormData?.id || "",
        title: helpFormData?.title || "",
        description: helpFormData?.description || "",
        form: {
            fields:
                helpFormData?.form?.fields?.map((field) => ({
                    name: (field?.name as FormTypeKeys) || "name",
                    label: field?.label || "",
                    description: field?.description || "",
                    textarea: field?.textarea || false,
                    input: {
                        name: (field?.input?.name as FormTypeKeys) || "name",
                        placeholder: field?.input?.placeholder || "",
                        sizes:
                            (field?.input
                                ?.sizes?.[0] as InputVariants["sizes"]) ||
                            "default",
                        variant:
                            (field?.input
                                ?.variant?.[0] as InputVariants["variant"]) ||
                            "default",
                        className: field?.input?.className || "",
                    },
                })) || [],
            button: {
                text: helpFormData?.form?.button?.link?.title || "",
                link: helpFormData?.form?.button?.link?.url || "",
                variant:
                    (helpFormData?.form?.button
                        ?.variant?.[0] as ButtonVariants["variant"]) || "dark",
                size:
                    (helpFormData?.form?.button
                        ?.size?.[0] as ButtonVariants["size"]) || "lg",
                className: helpFormData?.form?.button?.className || "",
                type: (helpFormData?.form?.button?.type as any) || "submit",
            },
        },
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
