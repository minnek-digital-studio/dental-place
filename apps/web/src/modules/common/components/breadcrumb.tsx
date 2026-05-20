import Link from "@/modules/common/components/link";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@ui/components/breadcrumb";

interface BreadCrumbProps {
    links: LinkType[];
}

type LinkType = {
    href: string;
    text: string;
    active?: boolean;
};

export const BreadCrumb = ({ links }: BreadCrumbProps) => {
    return (
        <Breadcrumb>
            <BreadcrumbList className="items-center justify-center">
                {links.map((link, index) => (
                    <>
                        <BreadcrumbItem key={`${index}-${link.text}`}>
                            {link.active ? (
                                <BreadcrumbPage>{link.text}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink asChild>
                                    <Link href={link.href}>{link.text}</Link>
                                </BreadcrumbLink>
                            )}
                        </BreadcrumbItem>

                        {index < links.length - 1 && <BreadcrumbSeparator />}
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
