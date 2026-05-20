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
