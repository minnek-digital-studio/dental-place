"use server";

import { config } from "@/config/constants";
import {
    GetFooterInfoDocument,
    type GetFooterInfoQuery,
    GetGeneralMenuDocument,
    type GetGeneralMenuQuery,
    GetNavbarInfoDocument,
    type GetNavbarInfoQuery,
} from "@/graphql/generated/graphql";
import { getClient } from "@/modules/common/lib/apollo/apollo-client";
import {
    mapFooterData,
    mapMenuData,
    mapNavbarData,
} from "@/modules/common/utils/layoutMapping";

// Public action — fetches layout data from CMS; no auth required.
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

// Public action — fetches menu data from CMS; no auth required.
export const getMenuData = async () => {
    const [menuData, navbarData] = await Promise.all([
        await getClient().query<GetGeneralMenuQuery>({
            query: GetGeneralMenuDocument,
            variables: {
                slug: config.WORDPRESS_MENU_SLUG,
            },
        }),
        await getClient().query<GetNavbarInfoQuery>({
            query: GetNavbarInfoDocument,
        }),
    ]);

    const mappedMenuData = mapMenuData({
        menuData: menuData.data.menu,
        navbarData: navbarData.data.header,
    });

    const error = menuData.error || navbarData.error;

    return {
        ...mappedMenuData,
        error,
    };
};

// Public action — fetches footer data from CMS; no auth required.
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
