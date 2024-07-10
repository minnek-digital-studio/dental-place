"use client";

import { useState } from "react";

import { Button } from "@minnek/ui/components/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from "@minnek/ui/components/dropdown-menu";

import { IconByName, type IconByNameProps } from "@minnek/ui/icons";

import { cn } from "@minnek/ui/lib/utils";

export type DropdownOption = {
    value: string;
    icon?: IconByNameProps;
    label: string;
};

type DropdownProps = {
    defaultOption: DropdownOption;
    options: DropdownOption[];
    label: string;
    className?: string;
    radioGroup?: boolean;
    icon?: IconByNameProps;
    children?: React.ReactNode;
};

export function Dropdown({
    defaultOption,
    options,
    label,
    className,
    radioGroup,
    icon,
    children,
}: DropdownProps) {
    const [option, setOption] = useState(defaultOption);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn("flex items-center", className)}>
                <Button
                    variant="transparent"
                    size="icon"
                    className="min-w-6 min-h-6 size-6 rounded-full overflow-hidden"
                    asChild
                >
                    <div>
                        <div>
                            {option?.icon ? (
                                <IconByName {...option.icon} size={34} />
                            ) : (
                                <IconByName {...icon} />
                            )}
                        </div>
                    </div>
                </Button>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 font-noto-sans">
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {radioGroup ? (
                    <DropdownMenuRadioGroup
                        value={option?.value}
                        onValueChange={(value) => {
                            setOption(
                                options.find(
                                    (option) => option.value === value,
                                ) || defaultOption,
                            );
                        }}
                    >
                        {options.map(({ icon, label, value }) => (
                            <DropdownMenuRadioItem
                                key={value}
                                value={value}
                                className="flex gap-2"
                            >
                                <IconByName name={icon?.name} size={24} />
                                <span>{label}</span>
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                ) : (
                    options.map(({ icon, label, value }) => (
                        <DropdownMenuItem
                            key={value}
                            className="flex gap-2"
                            onClick={() => {
                                setOption(
                                    options.find(
                                        (option) => option.value === value,
                                    ) || defaultOption,
                                );
                            }}
                        >
                            {icon && <IconByName name={icon.name} size={24} />}
                            <span>{label}</span>
                        </DropdownMenuItem>
                    ))
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
