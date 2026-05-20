import React from "react";
import type { ImageType, ButtonType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
    CardHeader,
    CardFooter,
} from "@ui/components/card";
import { Button } from "@ui/components/button";
import Link from "@/modules/common/components/link";
import { Typography } from "@ui/components/typography";
import { cn } from "@ui/lib/utils";
import { IconByName } from "@ui/components/icons";
import MemberCardButton from "./member-card-button";
export interface TeamMemberCard extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    name: string;
    specialty: string;
    img: ImageType;
    button: ButtonType;
    education?: Education[];
    description?: string;
    educationtitle?: string;
    socialLinks: ButtonType[];
}

export type Education = {
    title: string;
    institution: string;
    button: ButtonType;
};

const MemberCard = (member: TeamMemberCard) => {
    const {
        id,
        name,
        specialty,
        img,
        button,
        socialLinks,
        className,
        ...props
    } = member;
    return (
        <Card
            {...props}
            className={cn(
                "max-w-80 w-full shadow-team-card h-full gap-4",
                className,
            )}
        >
            <CardHeader className="flex items-center w-full px-6">
                <picture className="bg-secondary/25 rounded-full size-40">
                    <Image {...img} />
                </picture>
            </CardHeader>
            <CardContent className="text-center flex flex-col gap-3 px-6 flex-none">
                <Typography as="h3" className="text-lg lg:text-lg">
                    {name}
                </Typography>
                <Typography as="p" className="text-dark-grey px-1">
                    {specialty}
                </Typography>
                <div className="flex gap-3 w-full justify-center mt-1">
                    {socialLinks.map(
                        ({ link, icon, text, className, ...props }) => (
                            <Button
                                asChild
                                {...props}
                                key={id}
                                aria-label={text}
                                className={cn("size-[2.8rem]", className)}
                            >
                                <Link key={text} href={link}>
                                    <IconByName {...icon} />
                                </Link>
                            </Button>
                        ),
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-center px-6">
                <MemberCardButton {...member} />
            </CardFooter>
        </Card>
    );
};

export default MemberCard;
