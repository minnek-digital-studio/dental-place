import FooterData from "../data/footer.json";
import { Icon } from "../types";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/icons";
import { Typography } from "@minnek/ui/components/typography";
import Link from "next/link";
import { LucideMapPin } from "@minnek/ui/icons";

type FooterColumnType = {
    title: string;
    description?: string;
    socialLinks?: LinkType[];
    links?: LinkType[];
};

type LinkType = {
    title: string;
    href: string;
    icon?: Icon;
    className?: string;
};

interface FooterProps {
    columns: FooterColumnType[];
    copyRight: string;
}

const { columns, copyRight } = FooterData as FooterProps;
export default function Footer() {
    return (
        <footer className="container mt-10 flex flex-col font-noto-sans pb-2 gap-8 text-black">
            <section className="grid grid-cols-1 md:grid-cols-4 w-full gap-8 lg:gap-16 border-t pt-10">
                {columns.map((column) => (
                    <FooterColumn key={column.title} {...column} />
                ))}
            </section>
            <section className="text-center md:text-left">
                <Typography as="span" className="text-sm ">
                    {copyRight}
                </Typography>
            </section>
        </footer>
    );
}

export const FooterColumn = (column: FooterColumnType) => {
    return (
        <div className="flex flex-col gap-2">
            <Typography as="h5" className="font-bold md:min-h-7">
                {column.title}
            </Typography>
            {column.description && (
                <Typography as="span" className="text-sm leading-7 -mt-1">
                    {column.description}
                </Typography>
            )}
            {column.links && (
                <ul className="flex flex-col gap-2">
                    {column.links.map(({ title, icon, href, ...props }) => (
                        <li key={title} className="flex w-full">
                            <Link
                                href={href}
                                {...props}
                                className="flex gap-2 items-start h-full"
                            >
                                {icon && (
                                    <Button variant="default" size="icon">
                                        <IconByName {...icon} />
                                    </Button>
                                )}
                                <Typography
                                    as="span"
                                    className="text-sm flex h-full items-center hover:underline"
                                >
                                    {title}
                                </Typography>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {column.socialLinks && (
                <ul className="flex gap-2">
                    {column.socialLinks.map(
                        ({ title, icon, href, ...props }) => (
                            <li key={title}>
                                <Link href={href} {...props}>
                                    {icon && (
                                        <Button variant="default" size="icon">
                                            <IconByName {...icon} />
                                        </Button>
                                    )}
                                </Link>
                            </li>
                        ),
                    )}
                </ul>
            )}
        </div>
    );
};
