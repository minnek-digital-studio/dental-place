import {
    GetCallToActionByIdDocument,
    type GetCallToActionByIdQuery,
} from "@/graphql/generated/graphql";

import { Icon, CallToAction } from "../types";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { ButtonProps } from "@minnek/ui/components/button";
import { ComponentType } from "../utils/CallToActions";

export const getCallToAction = async (id: string): Promise<CallToAction> => {
    const { data } = await getClient().query<GetCallToActionByIdQuery>({
        query: GetCallToActionByIdDocument,
        variables: { id },
    });

    const { callToAction } = data;

    return {
        title: callToAction?.title as string,
        description: callToAction?.callToActionSettings?.description as string,
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
        },
        img: {
            src: callToAction?.callToActionSettings?.image?.img?.node
                ?.sourceUrl as string,
            alt: callToAction?.callToActionSettings?.image?.img?.node
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
