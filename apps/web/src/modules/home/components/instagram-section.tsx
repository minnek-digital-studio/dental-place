import { Button } from "@minnek/ui/components/button";
import Link from "next/link";
import { Typography } from "@minnek/ui/components/typography";
import { Icon, ButtonType } from "@/modules/common/types";
import { cn } from "@minnek/ui/lib/utils";
import { IconByName } from "@minnek/ui/icons";

export interface InstagramSectionProps
    extends React.HTMLAttributes<HTMLElement> {
    title: string;
    button: ButtonType;
    icon: Icon;
}

const instagramSection = ({
    title,
    button,
    icon,
    className,
    ...props
}: InstagramSectionProps) => {
    return (
        <section
            className={cn(
                "flex w-full items-center justify-center gap-2 flex-col md:flex-row text-center",
                className,
            )}
            {...props}
        >
            <Typography as="h4">{title}</Typography>
            <Button variant={button.variant} size={button.size} asChild>
                <Typography
                    as="a"
                    href={button.link}
                    className="flex gap-2 font-bold text-xl text-light-info"
                >
                    <IconByName {...icon} />
                    {button.text}
                </Typography>
            </Button>
        </section>
    );
};

export default instagramSection;
