import {
    type GetTeamMembersQuery,
    type GetTeamPageInfoQuery,
} from "@/graphql/generated/graphql";

import { ButtonVariants } from "@ui/components/button";
import { IconsName } from "@ui/components/icons";
import { TeamPageInfo } from "../actions/team.action";
import { getCallToAction } from "@/modules/common/actions/callToActions.action";
import { getTeam } from "../actions/team.action";

import { type AskSectionProps } from "@/modules/team/components/ask-section";

export const mapCalltoActions = async (
    data: GetTeamPageInfoQuery["page"],
): Promise<TeamPageInfo["callToActions"]> => {
    return await Promise.all(
        (data?.teamPageSettings?.callToActions?.edges || []).map(
            async ({ node: cta }) => await getCallToAction(cta.id),
        ),
    );
};

export const mapFAQInfo = async (
    data: GetTeamPageInfoQuery["page"],
): Promise<AskSectionProps> => {
    return {
        title: data?.teamPageSettings?.faq?.title ?? "",
        questions:
            data?.teamPageSettings?.faq?.questions?.map((question) => ({
                question: question?.question ?? "",
                answer: question?.answer ?? "",
                id: crypto.randomUUID(),
            })) ?? [],
        className: data?.teamPageSettings?.faq?.className ?? "",
    };
};

export const mapTeamInfo = async (
    data: GetTeamPageInfoQuery["page"],
): Promise<TeamPageInfo["TeamInfo"]> => {
    return {
        title: data?.teamPageSettings?.title ?? "",
        description: data?.teamPageSettings?.description ?? "",
        items: await getTeam(),
    };
};

export const mapTeamMembers = (data: GetTeamMembersQuery["teams"]) => {
    return (
        data?.edges.map(({ node: member }) => ({
            id: member.id,
            name: member.teamMemberSettings?.name ?? "",
            description: member.teamMemberSettings?.description ?? "",
            specialty: member.teamMemberSettings?.speciality ?? "",
            button: {
                text: member.teamMemberSettings?.button?.link?.title ?? "",
                link: member.teamMemberSettings?.button?.link?.url ?? "",
                size:
                    (member.teamMemberSettings?.button
                        ?.size?.[0] as ButtonVariants["size"]) ?? "icon",
                variant:
                    (member.teamMemberSettings?.button
                        ?.variant?.[0] as ButtonVariants["variant"]) ||
                    "default",
            },
            img: {
                src: member.teamMemberSettings?.image?.node?.sourceUrl ?? "",
                alt: member.teamMemberSettings?.image?.node?.altText ?? "",
            },
            educationtitle: member.teamMemberSettings?.educationTitle ?? "",
            education: member?.teamMemberSettings?.education?.map(
                (education) => ({
                    title: education?.title ?? "",
                    institution: education?.institution ?? "",
                    button: {
                        icon: {
                            name:
                                (education?.button?.icon?.name as IconsName) ??
                                "GraduationCap",
                            size: education?.button?.icon?.size ?? 20,
                        },
                        link: education?.button?.link?.url ?? "",
                        text: education?.button?.link?.title ?? "",
                        size:
                            (education?.button
                                ?.size?.[0] as ButtonVariants["size"]) ??
                            "icon",
                        variant:
                            (education?.button
                                ?.variant?.[0] as ButtonVariants["variant"]) ??
                            "default",
                    },
                }),
            ),
            socialLinks:
                member.teamMemberSettings?.socialLink?.map((social) => ({
                    icon: {
                        color: social?.icon?.color ?? "currentColor",
                        name: (social?.icon?.name as IconsName) ?? "",
                        size: social?.icon?.size ?? 20,
                        stroke: social?.icon?.stroke,
                        fill: social?.icon?.fill ?? "transparent",
                    },
                    text: social?.link?.title ?? "",
                    link: social?.link?.url ?? "",
                    size:
                        (social?.size?.[0] as ButtonVariants["size"]) ?? "icon",
                    variant:
                        (social?.variant?.[0] as ButtonVariants["variant"]) ??
                        "default",
                })) ?? [],
        })) || []
    );
};
