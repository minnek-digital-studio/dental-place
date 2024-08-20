import {
    type GetNavbarInfoQuery,
    type GetFooterInfoQuery,
} from "@/graphql/generated/graphql";
import { type DropdownOption } from "@/modules/common/components/dropdown";
import { type NavBarItem } from "@/modules/common/components/navbar";

export const mapNavbarData = (data: GetNavbarInfoQuery["header"]) => {
    const headerSettings = data?.headerSettings;

    const navItems = headerSettings?.navbarItems?.map((item) => ({
        title: item?.link?.title,
        href: item?.link?.url,
        subItems: item?.subMenuItem?.map((subItem) => ({
            title: subItem?.link?.title,
            href: subItem?.link?.url,
        })),
    })) as NavBarItem[];

    const SchedulesConfig = {
        title: headerSettings?.schedules?.title as string,
        schedules: headerSettings?.schedules?.schedule?.map((schedule) => ({
            label: schedule?.name,
            value: schedule?.value,
        })) as DropdownOption[],
    };

    const LangConfig = {
        title: headerSettings?.language?.title as string,
        languages: headerSettings?.language?.lang?.map((language) => ({
            label: language?.name,
            value: language?.value,
            icon: language?.icon,
        })) as DropdownOption[],
    };

    const PhoneConfig = headerSettings?.phone;

    const SocialLinksConfig = headerSettings?.sociallinks?.map((social) => ({
        title: social?.link?.title as string,
        href: social?.link?.url as string,
        icon: social?.icon,
    }));

    return {
        navItems,
        SchedulesConfig,
        LangConfig,
        PhoneConfig,
        SocialLinksConfig,
    };
};

export const mapFooterData = (data: GetFooterInfoQuery["footer"]) => {
    const columns = data?.footerConfig?.columns?.map((column) => {
        return {
            title: column?.title as string,
            description: column?.description as string,
            socialLinks: column?.socialLinks?.map((social) => ({
                title: social?.link?.title as string,
                href: social?.link?.url as string,
                icon: social?.icon,
            })),
            links: column?.links?.map((link) => ({
                title: link?.link?.title as string,
                href: link?.link?.url as string,
                icon: link?.icon?.name ? link?.icon : null,
                className: link?.className as string,
            })),
        };
    });

    const copyRight = data?.footerConfig?.copyRight as string;

    return {
        columns,
        copyRight,
    };
};
