import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@minnek/ui/components/accordion";
import { Button } from "@minnek/ui/components/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuListColumn,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@minnek/ui/components/navigation-menu";
import { Typography } from "@minnek/ui/components/typography";
import {
    ChevronDown,
    IconByName,
    Menu,
    Phone,
    type IconByNameProps,
} from "@minnek/ui/icons";
import { cn, cva, type VariantProps } from "@minnek/ui/lib/utils";
import Link from "next/link";
import * as React from "react";
import { Dropdown, type DropdownOption } from "./dropdown";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@minnek/ui/components/sheet";

import { getNavbarData } from "../actions/layout-actions";

export type NavBarItem = {
    title: string;
    href: string;
    subItems?: NavbarSubItem[];
    column?: boolean;
};

export type NavbarSubItem = {
    title: string;
    description?: string;
    href: string;
};

const NavBarVariants = cva("w-full py-6 flex justify-center items-center", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground",
            info: "bg-info text-info-foreground",
            secondary: "bg-secondary/40 text-secondary-foreground",
            transparent: "bg-transparent text-white",
            "light-primary": "bg-primary/40 text-primary-foreground",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const variants = {
    default: {
        button: "secondary",
        logo: "/images/logo/dental-logo.webp",
    },
    info: {
        button: "light",
        logo: "/images/logo/dental-logo.webp",
    },
    secondary: {
        button: "light",
        logo: "/images/logo/dental-logo.webp",
    },
    transparent: {
        button: "light",
        logo: "/images/logo/dental-logo-white.webp",
    },
    "light-primary": {
        button: "light",
        logo: "/images/logo/dental-logo.webp",
    },
};

export async function NavbarItem({
    title,
    href,
    subItems,
    column,
}: NavBarItem) {
    return (
        <NavigationMenuItem direction={column ? "column" : "row"}>
            {subItems ? (
                <>
                    {!column ? (
                        <>
                            <NavigationMenuTrigger
                                direction={column ? "column" : "row"}
                            >
                                {title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    {subItems.map((subItem) => (
                                        <ListItem
                                            key={subItem.title}
                                            title={subItem.title}
                                            href={subItem.href}
                                        />
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </>
                    ) : (
                        <Accordion
                            type="single"
                            className="w-full border-b-transparent"
                            collapsible
                        >
                            <AccordionItem
                                value={title}
                                className="border-b-transparent"
                            >
                                <AccordionTrigger className="inline-flex h-10 w-max px-2 py-2 text-sm font-normal border-b-2 border-transparent transition-colors hover:border-primary-foreground hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:border-primary-foreground">
                                    {title}
                                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="grid px-4 py-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        {subItems.map(
                                            ({ title, href }, index) => (
                                                <Link
                                                    href={href}
                                                    key={`${title}-${index}`}
                                                    legacyBehavior
                                                    passHref
                                                >
                                                    <NavigationMenuLink
                                                        className={navigationMenuTriggerStyle(
                                                            {
                                                                direction:
                                                                    "column",
                                                            },
                                                        )}
                                                    >
                                                        {title}
                                                    </NavigationMenuLink>
                                                </Link>
                                            ),
                                        )}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}
                </>
            ) : (
                href && (
                    <Link href={href} legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle({
                                direction: "row",
                            })}
                        >
                            {title}
                        </NavigationMenuLink>
                    </Link>
                )
            )}
        </NavigationMenuItem>
    );
}

export type NavbarVariants = VariantProps<typeof NavBarVariants>;

interface NavbarProps
    extends React.HTMLAttributes<HTMLDivElement>,
        NavbarVariants {}

export async function NavBar({ className, variant, ...props }: NavbarProps) {
    const {
        LangConfig,
        PhoneConfig,
        SchedulesConfig,
        SocialLinksConfig,
        navItems,
        error,
    } = await getNavbarData();

    if (error) {
        console.error(error);
        return null;
    }
    const { logo, button } = variants[variant || "default"];

    const SchedulesNavItems: NavBarItem = {
        title: SchedulesConfig.title,
        href: "#",
        subItems: SchedulesConfig.schedules.map((hour) => ({
            title: hour.label,
            href: "#",
        })),
    };

    return (
        <>
            <header
                className={cn(
                    NavBarVariants({
                        variant,
                        className,
                    }),
                )}
            >
                <main className="flex w-full items-center justify-between container">
                    <div className="flex items-center gap-4 lg:gap-6">
                        <Link href="/">
                            <img
                                src={logo}
                                alt="Dental Place Logo"
                                className="w-auto max-sm:max-h-7 max-h-8 md:w-auto xl:max-h-12"
                            />
                        </Link>
                        <NavigationMenu className="hidden md:flex">
                            <NavigationMenuList>
                                {navItems.map((item, index) => (
                                    <NavbarItem
                                        key={`${item.title}-${index}`}
                                        {...item}
                                    />
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-2 lg:gap-4 items-center">
                        <div className="flex gap-2 lg:gap-4 items-center max-md:flex-row-reverse">
                            <Button
                                variant={button as any}
                                size="icon"
                                className="lg:h-9 lg:px-5"
                                asChild
                            >
                                <Typography
                                    as="a"
                                    href={PhoneConfig?.url as string}
                                    className="gap-2 flex items-center justify-center font-bold"
                                >
                                    <Phone size={15} fill="black" stroke="0" />
                                    <span className="hidden lg:flex">
                                        {PhoneConfig?.title}
                                    </span>
                                </Typography>
                            </Button>

                            {SocialLinksConfig?.map((social, index) => {
                                if (
                                    social.icon === null ||
                                    social.icon === undefined
                                )
                                    return;

                                const { stroke, fill, ...icon } = social.icon;

                                return (
                                    <>
                                        <Button
                                            variant={button as any}
                                            size="icon"
                                            key={`${index}-${social.title}`}
                                            className="hidden md:flex"
                                            asChild
                                        >
                                            <Typography
                                                as="a"
                                                href="#"
                                                aria-label={social.title}
                                            >
                                                <IconByName
                                                    stroke={stroke ?? ""}
                                                    fill={fill ?? "transparent"}
                                                    {...(icon as IconByNameProps)}
                                                />
                                            </Typography>
                                        </Button>
                                    </>
                                );
                            })}
                            <Dropdown
                                defaultOption={
                                    LangConfig.languages[0] as DropdownOption
                                }
                                options={LangConfig.languages}
                                label={LangConfig.title}
                                className="flex"
                                radioGroup
                            />
                            <Dropdown
                                defaultOption={
                                    SchedulesConfig
                                        .schedules[0] as DropdownOption
                                }
                                options={SchedulesConfig.schedules}
                                label={SchedulesConfig.title}
                                className="hidden md:flex"
                                icon={{
                                    name: "Clock",
                                    size: 24,
                                    color:
                                        variant === "transparent"
                                            ? "white"
                                            : "black",
                                }}
                            />
                        </div>
                        <Sheet>
                            <SheetTrigger className="flex md:hidden" asChild>
                                <Button
                                    variant="transparent"
                                    size="icon"
                                    aria-label="Menu"
                                >
                                    <Menu
                                        className={cn(
                                            "text-primary-foreground size-7",
                                            variant === "transparent" &&
                                                "stroke-white",
                                        )}
                                    />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="text-black">
                                <SheetHeader className="flex flex-row justify-center px-2">
                                    <Link href="/" className="w-max">
                                        <img
                                            src={logo}
                                            alt="Dental Place Logo"
                                            loading="lazy"
                                            className="w-auto max-h-8"
                                        />
                                    </Link>
                                </SheetHeader>

                                <NavigationMenu className="bg-white max-h-max items-start w-full justify-start flex-1">
                                    <NavigationMenuListColumn>
                                        {navItems.map((item) => (
                                            <NavbarItem
                                                key={item.title}
                                                column
                                                {...item}
                                            />
                                        ))}

                                        <NavbarItem
                                            column
                                            {...SchedulesNavItems}
                                        />
                                    </NavigationMenuListColumn>
                                </NavigationMenu>
                            </SheetContent>
                        </Sheet>
                    </div>
                </main>
            </header>
        </>
    );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    column?: boolean;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
    ({ className, title, column, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-200 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            className,
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">
                            {title}
                        </div>

                        {children && (
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {children}
                            </p>
                        )}
                    </a>
                </NavigationMenuLink>
            </li>
        );
    },
);
ListItem.displayName = "ListItem";
