import {
    type GetHomePageQuery,
    GetHomePageDocument,
    type PostTypeSeoFragmentFragment,
} from "@/graphql/generated/graphql";

import { type InstagramSectionProps } from "../components/instagram-section";
import { type ServiceSectionProps } from "@/modules/home/components/services-section";
import { type ReviewsSectionProps } from "../components/reviews-section";
import { type ArsSectionProps } from "../components/ars-section";
import { PresentationSectionProps } from "../components/presentation-section";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { CallToAction, Seo } from "@/modules/common/types";
import {
    mapReviewData,
    mapServiceData,
    mapPresentationData,
    mapCalltoActions,
    mapInstagramData,
    mapArsData,
} from "../utils/sections.map";
import { mapSeo } from "@/modules/common/utils/seo.map";

export type HomePageInfo = {
    seo: Seo;
    PresentationInfo: PresentationSectionProps;
    ServicesInfo: ServiceSectionProps;
    callToActions: CallToAction[];
    ReviewsInfo: ReviewsSectionProps;
    InstagramInfo: InstagramSectionProps;
    ArsInfo: ArsSectionProps;
};

export const getHomePageInfo = async (): Promise<HomePageInfo> => {
    const client = getClient();
    const { data } = await client.query<GetHomePageQuery>({
        query: GetHomePageDocument,
    });

    return {
        seo: mapSeo(data?.page?.seo as PostTypeSeoFragmentFragment),
        PresentationInfo: mapPresentationData(data?.page),
        ServicesInfo: await mapServiceData(data?.page),
        callToActions: await mapCalltoActions(data?.page),
        ReviewsInfo: await mapReviewData(data?.page),
        InstagramInfo: mapInstagramData(data?.page),
        ArsInfo: mapArsData(data?.page),
    };
};
