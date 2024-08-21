import {
    GetFooterInfoDocument,
    GetFooterInfoQuery,
    GetNavbarInfoDocument,
    GetNavbarInfoQuery,
} from "@/graphql/generated/graphql";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import { mapNavbarData, mapFooterData } from "../utils/layoutMapping";

export const getNavbarData = async () => {
    const { data, error } = await getClient().query<GetNavbarInfoQuery>({
        query: GetNavbarInfoDocument,
    });

    const navbarData = mapNavbarData(data.header);
    return {
        ...navbarData,
        error,
    };
};

export const getFooterData = async () => {
    const { data, error } = await getClient().query<GetFooterInfoQuery>({
        query: GetFooterInfoDocument,
    });

    const footerData = mapFooterData(data.footer);
    return {
        ...footerData,
        error,
    };
};
