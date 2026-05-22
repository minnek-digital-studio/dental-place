import React from "react";

import type { ButtonType } from "@/modules/common/types";
import { Button } from "@ui/components/button";
import { Typography } from "@ui/components/typography";
import { IconByName } from "@ui/components/icons";
import { cn } from "@ui/lib/utils";
import Link from "@/modules/common/components/link";

export interface ButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
    buttons: ButtonType[];
}

const Buttons = ({ buttons, className: _className, ...props }: ButtonsProps) => {
    return (
        <div
            className="flex flex-row-reverse items-start justify-start flex-wrap md:flex-nowrap gap-4 max-md:w-full"
            {...props}
        >
            {buttons.map(({ icon, link, text, className, ...buttonProps }, idx) => (
                <Button
                    key={text ?? idx}
                    {...buttonProps}
                    className={cn("", className)}
                    asChild
                >
                    <Link
                        href={link}
                        aria-label={text}
                        className="font-bold flex-1 w-full max-w-40"
                    >
                        {icon?.position === "left" && <IconByName {...icon} />}
                        <Typography as="span" className="text-inherit">
                            {text}
                        </Typography>
                        {icon?.position !== "left" && <IconByName {...icon} />}
                    </Link>
                </Button>
            ))}
        </div>
    );
};

export default Buttons;
