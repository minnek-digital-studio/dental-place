import FooterData from "../data/footer.json";
import { Icon } from "../types";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/icons";
import { Typography } from "@minnek/ui/components/typography";
import Link from "next/link";
import { LucideMapPin } from "@minnek/ui/icons";
import { cn } from "@minnek/ui/lib/utils";

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
        <footer className="container flex flex-col font-noto-sans mb-8 gap-8 text-black">
            <section className="grid grid-cols-1 md:grid-cols-4 w-full gap-8 lg:gap-16 border-t pt-10">
                {columns.map((column) => (
                    <FooterColumn key={column.title} {...column} />
                ))}
            </section>
            <section className="text-center md:text-left">
                <Typography as="span" className="text-sm">
                    © {new Date().getFullYear()}
                    {copyRight}
                </Typography>
            </section>
        </footer>
    );
}

export const FooterColumn = (column: FooterColumnType) => {
    return (
        <div className="flex flex-col gap-3">
            {column?.title && (
                <Typography
                    as="h2"
                    className="font-bold md:min-h-7 text-lg lg:text-xl"
                >
                    {column.title}
                </Typography>
            )}

            {column.description && (
                <Typography as="span" className="text-sm leading-7 -mt-1">
                    {column.description}
                </Typography>
            )}
            {column.links && (
                <ul
                    className={`flex flex-col gap-2 ${!column.title && "md:mt-10"}`}
                >
                    {column.links.map(
                        ({ title, icon, href, className, ...props }) => {
                            return (
                                <li key={title} className="flex w-full">
                                    <Link
                                        href={href}
                                        {...props}
                                        className="flex gap-2 items-start h-full hover:underline"
                                        aria-label={title}
                                    >
                                        {icon && (
                                            <Button
                                                variant="default"
                                                size="icon"
                                                asChild
                                            >
                                                <div aria-hidden>
                                                    <IconByName {...icon} />
                                                </div>
                                            </Button>
                                        )}
                                        <Typography
                                            as="span"
                                            className={cn(
                                                "text-sm flex h-full items-center",
                                                icon && "leading-6",
                                                className,
                                            )}
                                        >
                                            {title}
                                        </Typography>
                                    </Link>
                                </li>
                            );
                        },
                    )}
                </ul>
            )}
            {column.socialLinks && (
                <ul className="flex gap-2">
                    {column.socialLinks.map(
                        ({ title, icon, href, ...props }) => (
                            <li key={title}>
                                {icon && (
                                    <Button
                                        variant="default"
                                        size="icon"
                                        aria-label={title}
                                        asChild
                                    >
                                        <Link href={href} {...props}>
                                            <IconByName {...icon} />
                                        </Link>
                                    </Button>
                                )}
                            </li>
                        ),
                    )}
                </ul>
            )}
        </div>
    );
};
