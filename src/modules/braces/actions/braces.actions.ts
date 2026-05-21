import {
    type GetBracesExpressPageInfoQuery,
    GetBracesExpressPageInfoDocument,
    type PostTypeSeoFragmentFragment,
} from "@/graphql/generated/graphql";

import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { CallToAction, Seo } from "@/modules/common/types";
import { mapSeo } from "@/modules/common/utils/seo.map";
import { type HeroSectionProps } from "@/modules/braces/components/hero-section";
import { type BracesPhotosSectionProps } from "@/modules/braces/components/braces-photos-section";
import { type HelpFormSectionProps } from "@/modules/braces/components/help-form-section";

import {
    mapHeroData,
    mapBracesPhotosData,
    mapCalltoActions,
    mapHelpFormInfo,
} from "../utils/braces.map";

export type BracesExpressPageInfo = {
    seo: Seo;
    HeroInfo: HeroSectionProps;
    callToActions: CallToAction[];
    BracesPhotosInfo: BracesPhotosSectionProps;
    helpFormInfo: HelpFormSectionProps;
};

export const getBracesExpressPageInfo =
    async (): Promise<BracesExpressPageInfo> => {
        const client = getClient();
        const { data } = await client.query<GetBracesExpressPageInfoQuery>({
            query: GetBracesExpressPageInfoDocument,
        });

        return {
            seo: mapSeo(data?.page?.seo as PostTypeSeoFragmentFragment),
            HeroInfo: mapHeroData(data?.page),
            callToActions: await mapCalltoActions(data?.page),
            BracesPhotosInfo: mapBracesPhotosData(data?.page),
            helpFormInfo: mapHelpFormInfo(data?.page),
        };
    };
