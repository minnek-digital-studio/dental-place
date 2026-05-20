import {
    GetCaseStudieBySlugQuery,
    GetCaseStudieBySlugDocument,
} from "@/graphql/generated/graphql";

import { Icon } from "../types";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { ButtonProps } from "@ui/components/button";
import { BeenDoneSectionProps } from "@/modules/case_studies/components/been-done";
import { ServiceDescriptionSectionProps } from "@/modules/case_studies/components/service-description";
import { CaseStudiesDetailsSectionProps } from "@/modules/case_studies/components/case-studies-details-section";
import { CallToAction } from "../types";
import { getCallToAction } from "./callToActions.action";
import { Seo } from "../types";
import { IconsName } from "@ui/components/icons";
import { mapSeo } from "../utils/seo.map";

export type CaseStudies = {
    seo: Seo;
    caseStudies: CaseStudiesDetailsSectionProps;
    servicesDescription: ServiceDescriptionSectionProps;
    beenDone: BeenDoneSectionProps;
    callToActions: CallToAction[];
};

export const getCaseStudy = async (slug?: string | null) => {
    const { data } = await getClient().query<GetCaseStudieBySlugQuery>({
        query: GetCaseStudieBySlugDocument,
        variables: { slug },
    });

    const { caseStudy } = data;

    if (!caseStudy) {
        throw new Error("Case study not found");
    }

    return caseStudy;
};

export const getCaseStudyPage = async (
    slug?: string | null,
): Promise<CaseStudies> => {
    const caseStudy = await getCaseStudy(slug);
    return {
        seo: mapSeo(caseStudy.seo),
        servicesDescription: await mapServiceDescription(caseStudy),
        callToActions: await mapCalltoActions(caseStudy),
        caseStudies: await mapCaseStudiesData(caseStudy),
        beenDone: await mapBeenDoneSection(caseStudy),
    };
};

export const mapCalltoActions = async (
    data: GetCaseStudieBySlugQuery["caseStudy"],
): Promise<CaseStudies["callToActions"]> => {
    return await Promise.all(
        (data?.caseStudySettings?.callToActions?.edges || []).map(
            async ({ node: cta }) => await getCallToAction(cta.id),
        ),
    );
};

export const mapBeenDoneSection = async (
    data: GetCaseStudieBySlugQuery["caseStudy"],
): Promise<BeenDoneSectionProps> => {
    const beenDoneData = data?.caseStudySettings?.beenDoneSection;

    return {
        title: beenDoneData?.title || "",
        description: beenDoneData?.description || "",
        itemsIcons:
            beenDoneData?.itemsIcons?.map((item) => {
                return {
                    icon: {
                        name: (item?.icon?.name as IconsName) || "X",
                        size: item?.icon?.size || 20,
                        strokeWidth: item?.icon?.strokeWidth || 3,
                        className: item?.icon?.className || "",
                    },
                    title: item?.title || "",
                };
            }) || [],
    };
};

export const mapCaseStudiesData = async (
    data: GetCaseStudieBySlugQuery["caseStudy"],
): Promise<CaseStudiesDetailsSectionProps> => {
    return {
        title: data?.title || "",
        description: data?.caseStudySettings?.description || "",
        img: {
            src: data?.featuredImage?.node?.sourceUrl || "",
            alt: data?.featuredImage?.node?.altText || "",
        },
    };
};

export const mapServiceDescription = async (
    caseStudy: GetCaseStudieBySlugQuery["caseStudy"],
): Promise<ServiceDescriptionSectionProps> => {
    return {
        title:
            caseStudy?.caseStudySettings?.serviceDescriptionSection?.title ||
            "",
        description:
            caseStudy?.caseStudySettings?.serviceDescriptionSection
                ?.description || "",
        subDescription:
            caseStudy?.caseStudySettings?.serviceDescriptionSection
                ?.subDescription || "",
        afterImg: {
            title:
                caseStudy?.caseStudySettings?.serviceDescriptionSection?.images
                    ?.edges?.[0]?.node.title || "",
            img: {
                src:
                    caseStudy?.caseStudySettings?.serviceDescriptionSection
                        ?.images?.edges?.[0]?.node.sourceUrl || "",
                alt:
                    caseStudy?.caseStudySettings?.serviceDescriptionSection
                        ?.images?.edges?.[0]?.node.altText || "",
            },
        },
        beforeImg: {
            title:
                caseStudy?.caseStudySettings?.serviceDescriptionSection?.images
                    ?.edges?.[1]?.node.title || "",
            img: {
                src:
                    caseStudy?.caseStudySettings?.serviceDescriptionSection
                        ?.images?.edges?.[1]?.node.sourceUrl || "",
                alt:
                    caseStudy?.caseStudySettings?.serviceDescriptionSection
                        ?.images?.edges?.[1]?.node.altText || "",
            },
        },
    };
};
