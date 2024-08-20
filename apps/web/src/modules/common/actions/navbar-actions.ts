import {
    GetLayoutInfoDocument,
    GetLayoutInfoQuery,
} from "@/graphql/generated/graphql";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { mapNavbarData } from "../utils/navbarMapping";

export const getNavbarData = async () => {
    const { data, error } = await getClient().query<GetLayoutInfoQuery>({
        query: GetLayoutInfoDocument,
    });

    const navbarData = mapNavbarData(data);

    return { ...navbarData, error };
};
