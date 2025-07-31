import React from "react";
import { Button } from "@minnek/ui/components/button";
import { IconByName } from "@minnek/ui/icons";
import Link from "@/modules/common/components/link";
import { ButtonType } from "@/modules/common/types";

export interface CardToActionProps {
    title: string;
    description?: string;
    subTitle?: string;
    phoneNumber?: string;
    button: ButtonType;
}

const CallUs = ({
    title,
    description,
    subTitle,
    phoneNumber,
    button,
}: CardToActionProps) => {
    return (
        <div className="bg-secondary/40 rounded-3xl flex flex-col gap-3 p-11">
            <h3 className="font-noto-sans text-black tracking-tight text-xl lg:text-xl font-extrabold leading-none">
                {title}
            </h3>
            <p className="font-noto-sans text-black text-base">{description}</p>
            <div className="flex flex-col">
                <p className="font-noto-sans text-black text-base">
                    {subTitle}
                </p>
                <p>
                    <span className="font-noto-sans text-black tracking-tight text-2xl lg:text-2xl font-extrabold">
                        {phoneNumber}
                    </span>
                </p>
            </div>
            <Button
                variant={button.variant}
                size={button.size}
                className={button.className}
                asChild
            >
                <Link
                    href={button.link}
                    className="text-wrap max-[400px]:h-[3.75rem]"
                >
                    <IconByName {...button.icon} />
                    {button.text}
                    <IconByName name="MoveRight" size={24} />
                </Link>
            </Button>
        </div>
    );
};

export default CallUs;
