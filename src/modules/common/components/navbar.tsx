import { config } from "@/config/constants";
import {
    getMenuData,
    getNavbarData,
} from "@/modules/common/actions/layout-actions";
import {
    Dropdown,
    type DropdownOption,
} from "@/modules/common/components/dropdown";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@ui/components/accordion";
import { Button } from "@ui/components/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuListColumn,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@ui/components/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@ui/components/sheet";
import { Typography } from "@ui/components/typography";
import {
    ChevronDown,
    IconByName,
    Menu,
    Phone,
    type IconByNameProps,
} from "@ui/components/icons";
import { cn, cva, type VariantProps } from "@ui/lib/utils";
import Link from "next/link";
import React from "react";

export type NavBarItem = {
    title: string;
    href: string;
    subItems?: NavbarSubItem[];
    column?: boolean;
    variant?: NavbarVariants["variant"];
    text?: NavbarVariants["text"];
};

export type NavbarSubItem = {
    title: string;
    description?: string;
    href: string;
};

const NavBarVariants = cva(
    "w-full py-6 flex justify-center items-center transition-all duration-300 z-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                info: "bg-info text-info-foreground",
                secondary: "bg-secondary/40 text-secondary-foreground",
                transparent: "bg-transparent text-white",
                "light-primary": "bg-primary/40 text-primary-foreground",
                transparentLight:
                    "bg-transparent text-white group md:hover:text-black md:hover:bg-white",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

const TextVariants = cva("", {
    variants: {
        text: {
            sm: "text-sm",
            md: "text-md",
            lg: "text-lg",
            xl: "text-xl",
        },
    },
    defaultVariants: {
        text: "sm",
    },
});

const variants = {
    default: {
        button: "secondary",
        text: "",
        logo: "/images/logo/dental-logo.webp",
    },
    info: {
        button: "light",
        text: "",
        logo: "/images/logo/dental-logo.webp",
    },
    secondary: {
        button: "light",
        text: "",
        logo: "/images/logo/dental-logo.webp",
    },
    transparent: {
        button: "transparent",
        text: "",
        logo: "/images/logo/dental-logo-white.webp",
    },
    "light-primary": {
        button: "light",
        text: "",
        logo: "/images/logo/dental-logo.webp",
    },
    transparentLight: {
        button: "transparent",
        text: "text-md mx-2",
        logo: [
            "/images/logo/dental-logo-white.webp",
            "/images/logo/dental-logo.webp",
        ],
    },
};

export type NavbarVariants = VariantProps<typeof NavBarVariants> &
    VariantProps<typeof TextVariants>;

interface NavbarProps
    extends React.HTMLAttributes<HTMLDivElement>, NavbarVariants {
    align?: "left" | "center";
}

export async function NavBar({
    className,
    variant,
    align = "left",
    text,
    ...props
}: NavbarProps) {
    const { PhoneConfig, SchedulesConfig, SocialLinksConfig, navItems, error } =
        config.WORDPRESS_MENU_ENABLED
            ? await getMenuData()
            : await getNavbarData();

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
                            {logo instanceof Array ? (
                                logo.map((src, index) => (
                                    <img
                                        key={index}
                                        src={src}
                                        alt="Dental Place Logo"
                                        className={`w-auto max-sm:max-h-7 max-h-8 md:w-auto xl:max-h-12 ${index === 0 ? "flex md:group-hover:hidden" : "hidden md:group-hover:flex"}`}
                                    />
                                ))
                            ) : (
                                <img
                                    src={logo}
                                    alt="Dental Place Logo"
                                    className="w-auto max-sm:max-h-7 max-h-8 md:w-auto xl:max-h-12"
                                />
                            )}
                        </Link>
                        {align === "left" && (
                            <NavigationMenu className="hidden md:flex">
                                <NavigationMenuList>
                                    {navItems.map((item, index) => (
                                        <NavbarItem
                                            key={`${item.title}-${index}`}
                                            variant={variant}
                                            text={text}
                                            {...item}
                                        />
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        )}
                    </div>
                    {align === "center" && (
                        <div className="flex items-center gap-4 lg:gap-6">
                            <NavigationMenu className="hidden md:flex">
                                <NavigationMenuList>
                                    {navItems.map((item, index) => (
                                        <NavbarItem
                                            key={`${item.title}-${index}`}
                                            variant={variant}
                                            text={text}
                                            {...item}
                                        />
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    )}
                    <div className="flex gap-2 lg:gap-4 items-center">
                        <div className="flex gap-2 lg:gap-4 items-center max-md:flex-row-reverse">
                            <Button
                                variant={button as any}
                                size="icon"
                                className={cn(
                                    variant === "transparentLight" &&
                                        "md:group-hover:border-black",
                                )}
                                asChild
                            >
                                <Typography
                                    as="a"
                                    href={PhoneConfig?.url as string}
                                    className="gap-2 flex items-center justify-center font-bold"
                                >
                                    <Phone
                                        className={cn(
                                            variant === "transparent" ||
                                                variant === "transparentLight"
                                                ? "fill-white"
                                                : "fill-black",
                                            variant === "transparentLight" &&
                                                "md:group-hover:fill-black",
                                        )}
                                        size={15}
                                        stroke="0"
                                    />
                                    <span className="hidden">
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
                                            className={cn(
                                                index === 0
                                                    ? "flex"
                                                    : "hidden md:flex",
                                                variant ===
                                                    "transparentLight" &&
                                                    "md:group-hover:border-black",
                                            )}
                                            asChild
                                        >
                                            <Typography
                                                as="a"
                                                href={social.href}
                                                aria-label={social.title}
                                            >
                                                <IconByName
                                                    stroke={stroke ?? ""}
                                                    className={cn(
                                                        variant !==
                                                            "transparent" &&
                                                            variant !==
                                                                "transparentLight" &&
                                                            "fill-black",
                                                        variant ===
                                                            "transparentLight" &&
                                                            "md:group-hover:fill-black",
                                                    )}
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
                                    SchedulesConfig
                                        .schedules[0] as DropdownOption
                                }
                                options={SchedulesConfig.schedules}
                                label={SchedulesConfig.title}
                                className="hidden md:flex"
                                icon={{
                                    name: "Clock",
                                    size: 24,
                                    className: cn(
                                        variant === "transparent" ||
                                            variant === "transparentLight"
                                            ? "text-white"
                                            : "text-black",
                                        variant === "transparentLight" &&
                                            "md:group-hover:text-black",
                                    ),
                                }}
                            />
                        </div>
                        <Sheet>
                            <SheetTrigger className="flex md:hidden" asChild>
                                <Button
                                    variant="transparent"
                                    size="icon"
                                    aria-label="Menu"
                                    className="border-0"
                                >
                                    <Menu
                                        className={cn(
                                            "text-primary-foreground size-7",
                                            (variant === "transparent" ||
                                                variant ===
                                                    "transparentLight") &&
                                                "stroke-white",
                                        )}
                                    />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="text-black">
                                <SheetHeader className="flex flex-row justify-center px-2">
                                    <Link href="/" className="w-max">
                                        <img
                                            src={variants["default"].logo}
                                            alt="Dental Place Logo"
                                            loading="lazy"
                                            className="w-auto max-h-8"
                                        />
                                    </Link>
                                </SheetHeader>

                                <NavigationMenu className="bg-white max-h-full items-start w-full justify-start flex-1">
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

export async function NavbarItem({
    title,
    href,
    subItems,
    column,
    variant,
    text,
}: NavBarItem) {
    return (
        <NavigationMenuItem direction={column ? "column" : "row"}>
            {subItems ? (
                <>
                    {!column ? (
                        <>
                            <NavigationMenuTrigger
                                direction={column ? "column" : "row"}
                                className={cn(
                                    TextVariants({
                                        text,
                                    }),
                                    (variant === "transparent" ||
                                        variant === "transparentLight") &&
                                        "md:data-[state=open]:border-white md:hover:border-white",
                                    variant === "transparentLight" &&
                                        "md:group-hover:data-[state=open]:border-black md:group-hover:hover:border-black transition-none duration-300",
                                )}
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
                            className={cn(
                                navigationMenuTriggerStyle({
                                    direction: "row",
                                }),
                                TextVariants({
                                    text,
                                }),
                                (variant === "transparent" ||
                                    variant === "transparentLight") &&
                                    "hover:border-white",
                                variant === "transparentLight" &&
                                    "md:group-hover:hover:border-black",
                                "max-md:w-full max-md:items-start max-md:justify-start transition-none duration-300",
                            )}
                        >
                            {title}
                        </NavigationMenuLink>
                    </Link>
                )
            )}
        </NavigationMenuItem>
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
