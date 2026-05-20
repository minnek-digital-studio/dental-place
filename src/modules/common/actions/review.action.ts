import {
    GetReviewByIdDocument,
    type GetReviewByIdQuery,
} from "@/graphql/generated/graphql";

import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import type { Author, Icon } from "@/modules/common/types";

export type Review = {
    comment: string;
    rating: number;
    author: Author;
    icon?: Icon;
    link?: string;
};

export const getReview = async (id: string): Promise<Review> => {
    const {
        data: { review },
    } = await getClient().query<GetReviewByIdQuery>({
        query: GetReviewByIdDocument,
        variables: { id },
    });

    return {
        author: {
            img: {
                alt: review?.reviewsSettings?.author?.avatar?.node
                    ?.altText as string,
                src: review?.reviewsSettings?.author?.avatar?.node
                    ?.sourceUrl as string,
            },
            name: review?.reviewsSettings?.author?.name as string,
        },
        icon: {
            name:
                (review?.reviewsSettings?.icon?.name as Icon["name"]) ||
                "Google",
            size: review?.reviewsSettings?.icon?.size || (18 as number),
            color: review?.reviewsSettings?.icon?.color || "",
        },
        link: review?.reviewsSettings?.link?.url || "",
        comment: review?.reviewsSettings?.comment as string,
        rating: review?.reviewsSettings?.rating as number,
    };
};
