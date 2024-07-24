import React from "react";
import MemberCard, { type TeamMemberCard } from "../components/member-card";
import { Typography } from "@minnek/ui/components/typography";
import { cn } from "@minnek/ui/lib/utils";

export interface OurTeamSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    items: TeamMemberCard[];
}

const OurTeamSection = ({
    title,
    description,
    items,
    className,
    ...props
}: OurTeamSectionProps) => {
    return (
        <section
            className={cn(
                "bg-gradient-to-b from-secondary/40 from-[37%] to-0% flex flex-col gap-12 mb-20 pt-6",
                className,
            )}
            {...props}
        >
            <header className="max-w-[35rem] flex flex-col gap-5 text-center container">
                <Typography as="h2">{title}</Typography>
                <Typography as="p" className="text-dark-grey">
                    {description}
                </Typography>
            </header>
            <main className="container flex flex-col items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 w-full max-w-max auto-rows-fr px-4">
                    {items.map((item) => (
                        <MemberCard key={item.id} {...item} />
                    ))}
                </div>
            </main>
        </section>
    );
};

export default OurTeamSection;
