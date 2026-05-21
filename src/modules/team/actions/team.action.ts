"use server";

import {
    type GetTeamMembersQuery,
    GetTeamMembersDocument,
    type GetTeamPageInfoQuery,
    GetTeamPageInfoDocument,
    type PostTypeSeoFragmentFragment,
} from "@/graphql/generated/graphql";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";

import { OurTeamSectionProps } from "../components/team-section";
import { type AskSectionProps } from "@/modules/team/components/ask-section";

import {
    mapTeamMembers,
    mapCalltoActions,
    mapFAQInfo,
    mapTeamInfo,
} from "../utils/team.map";
import { CallToAction } from "@/modules/common/types";
import { Seo } from "@/modules/common/types";
import { mapSeo } from "@/modules/common/utils/seo.map";

export type TeamPageInfo = {
    seo: Seo;
    TeamInfo: OurTeamSectionProps;
    callToActions: CallToAction[];
    FAQInfo: AskSectionProps;
};

export const getTeamPageInfo = async (): Promise<TeamPageInfo> => {
    const { data } = await getClient().query<GetTeamPageInfoQuery>({
        query: GetTeamPageInfoDocument,
    });

    const teamPageInfo: TeamPageInfo = {
        seo: mapSeo(data?.page?.seo as PostTypeSeoFragmentFragment),
        TeamInfo: await mapTeamInfo(data?.page),
        callToActions: await mapCalltoActions(data?.page),
        FAQInfo: await mapFAQInfo(data?.page),
    };

    return teamPageInfo;
};

export const getTeam = async (): Promise<OurTeamSectionProps["items"]> => {
    const { data } = await getClient().query<GetTeamMembersQuery>({
        query: GetTeamMembersDocument,
    });

    const teamMembers: OurTeamSectionProps["items"] = mapTeamMembers(
        data?.teams,
    );

    return teamMembers;
};
