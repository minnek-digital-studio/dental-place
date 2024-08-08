import * as React from "react";
import Link from "next/link";
import { Button } from "@minnek/ui/components/button";
import { cva, type VariantProps, cn } from "@minnek/ui/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuListColumn,
} from "@minnek/ui/components/navigation-menu";
import { Dropdown, type DropdownOption } from "./dropdown";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@minnek/ui/components/accordion";
import {
    Phone,
    Facebook,
    Instagram,
    Menu,
    ChevronDown,
} from "@minnek/ui/icons";
import { Typography } from "@minnek/ui/components/typography";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@minnek/ui/components/sheet";

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

const langs: DropdownOption[] = [
    {
        value: "es",
        icon: {
            name: "SpainFlag",
        },
        label: "Español",
    },
    {
        value: "en",
        label: "English",
        icon: {
            name: "UsaFlag",
        },
    },
];

const hours: DropdownOption[] = [
    {
        value: "am",
        label: "Lunes - V 8:00 AM - 12:00 PM",
    },
    {
        value: "pm",
        label: "Sabado 2:00 PM - 6:00 PM",
    },
];

const navItems: NavBarItem[] = [
    {
        title: "Inicio",
        href: "/",
    },
    {
        title: "Acerca",
        href: "/team",
    },
    {
        title: "Contacto",
        href: "/contact_us",
    },
    {
        title: "Servicios",
        href: "/services",
        subItems: [
            {
                title: "Odontología General",
                href: "/services/odontologia-general",
            },
            {
                title: "Ortodoncia",
                href: "/services/orthodontics",
            },
            {
                title: "Endodoncia",
                href: "/services/endodontics",
            },
            {
                title: "Periodoncia",
                href: "/services/periodontics",
            },
            {
                title: "Odontología Estética",
                href: "/services/aesthetic-dentistry",
            },
            {
                title: "Cirugía Oral y Maxilofacial",
                href: "/services/oral-and-maxillofacial-surgery",
            },
            {
                title: "Implantología Dental",
                href: "/services/dental-implants",
            },
            {
                title: "Odontopediatria",
                href: "/services/pediatric-dentistry",
            },
            {
                title: "Rehabilitación Bucal",
                href: "/services/oral-rehabilitation",
            },
        ],
    },
];

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

export function NavbarItem({ title, href, subItems, column }: NavBarItem) {
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
                                        {subItems.map(({ title, href }) => (
                                            <Link
                                                href={href}
                                                key={title}
                                                legacyBehavior
                                                passHref
                                            >
                                                <NavigationMenuLink
                                                    className={navigationMenuTriggerStyle(
                                                        {
                                                            direction: "column",
                                                        },
                                                    )}
                                                >
                                                    {title}
                                                </NavigationMenuLink>
                                            </Link>
                                        ))}
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

export function NavBar({ className, variant, ...props }: NavbarProps) {
    const { logo, button } = variants[variant || "default"];
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
                                {navItems.map((item) => (
                                    <NavbarItem key={item.title} {...item} />
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex gap-2 lg:gap-4 items-center">
                        <Button
                            variant={button as any}
                            size="icon"
                            className="lg:h-9 lg:px-5"
                            asChild
                        >
                            <Typography
                                as="a"
                                href="tel:+18095818686"
                                className="gap-2 flex items-center justify-center font-bold"
                            >
                                <Phone size={15} fill="black" stroke="0" />
                                <span className="hidden lg:flex">
                                    (809) 581-8686
                                </span>
                            </Typography>
                        </Button>

                        <Button
                            variant={button as any}
                            size="icon"
                            className="hidden md:flex"
                            asChild
                        >
                            <Typography as="a" href="#" aria-label="Facebook">
                                <Facebook size={20} fill="black" stroke="0" />
                            </Typography>
                        </Button>

                        <Button
                            variant={button as any}
                            size="icon"
                            className="hidden md:flex"
                            asChild
                        >
                            <Typography as="a" href="#" aria-label="Instagram">
                                <Instagram size={18} />
                            </Typography>
                        </Button>

                        <Dropdown
                            defaultOption={langs[0] as DropdownOption}
                            options={langs}
                            label="Idiomas"
                            className="hidden md:flex"
                            radioGroup
                        />

                        <Dropdown
                            defaultOption={hours[0] as DropdownOption}
                            options={hours}
                            label="Horario"
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
                                <SheetHeader>
                                    <SheetTitle>Menú</SheetTitle>
                                    <SheetDescription>
                                        Navega a través de las opciones
                                    </SheetDescription>
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
                                    </NavigationMenuListColumn>
                                </NavigationMenu>

                                <SheetFooter>
                                    <div className="flex w-full justify-between">
                                        <Dropdown
                                            defaultOption={
                                                langs[0] as DropdownOption
                                            }
                                            options={langs}
                                            label="Idiomas"
                                            radioGroup
                                        >
                                            <Typography as="span">
                                                Idiomas
                                            </Typography>
                                        </Dropdown>

                                        <Dropdown
                                            defaultOption={
                                                hours[0] as DropdownOption
                                            }
                                            options={hours}
                                            label="Horario"
                                            icon={{
                                                name: "Clock",
                                                size: 24,
                                            }}
                                        >
                                            <Typography as="span">
                                                Horario
                                            </Typography>
                                        </Dropdown>
                                    </div>
                                </SheetFooter>
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
