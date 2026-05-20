import {
    GetCallToActionByIdDocument,
    type GetCallToActionByIdQuery,
} from "@/graphql/generated/graphql";

import { Icon, CallToAction } from "../types";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { ButtonProps } from "@ui/components/button";
import { ComponentType } from "../utils/CallToActions";
import { IconsName } from "@ui/components/icons";

export const getCallToAction = async (id: string): Promise<CallToAction> => {
    const { data } = await getClient().query<GetCallToActionByIdQuery>({
        query: GetCallToActionByIdDocument,
        variables: { id },
    });

    const { callToAction } = data;

    return {
        title: callToAction?.title as string,
        description: callToAction?.callToActionSettings?.description as string,
        descriptionRich: callToAction?.callToActionSettings
            ?.descriptionRich as string,
        subTitle: callToAction?.callToActionSettings?.callUs
            ?.subTitle as string,
        phoneNumber: callToAction?.callToActionSettings?.callUs
            ?.phoneNumber as string,
        type: callToAction?.callToActionSettings?.type[0] as ComponentType,
        button: {
            text: callToAction?.callToActionSettings?.button?.link
                ?.title as string,
            link: callToAction?.callToActionSettings?.button?.link
                ?.url as string,
            variant: callToAction?.callToActionSettings?.button
                ?.variant[0] as ButtonProps["variant"],
            size: callToAction?.callToActionSettings?.button
                ?.size[0] as ButtonProps["size"],
            icon: {
                name: callToAction?.callToActionSettings?.button?.icon
                    ?.name as IconsName,
                size: callToAction?.callToActionSettings?.button?.icon
                    ?.size as number,
                position: callToAction?.callToActionSettings?.button?.icon
                    ?.position?.[0] as "left" | "right",
            },
            className: callToAction?.callToActionSettings?.button
                ?.className as string,
        },
        img: {
            src: callToAction?.callToActionSettings?.image?.img?.node
                ?.sourceUrl as string,
            alt: callToAction?.callToActionSettings?.image?.img?.node
                ?.altText as string,
            className: callToAction?.callToActionSettings?.image
                ?.className as string,
        },
        otherImage: {
            src: callToAction?.callToActionSettings?.image?.otherImage?.node
                ?.sourceUrl as string,
            alt: callToAction?.callToActionSettings?.image?.otherImage?.node
                ?.altText as string,
            className: callToAction?.callToActionSettings?.image
                ?.className as string,
        },
        className: callToAction?.callToActionSettings?.className as string,
        items: callToAction?.callToActionSettings?.items?.map((item) => ({
            title: item?.title as string,
            description: item?.description as string,
            icon: item?.icon as Icon,
        })) as CallToAction["items"],
    };
};
