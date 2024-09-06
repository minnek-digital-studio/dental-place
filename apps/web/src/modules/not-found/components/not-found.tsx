import { Typography } from "@minnek/ui/components/typography";
import { Button } from "@minnek/ui/components/button";
import Link from "next/link";
import { IconByName } from "@minnek/ui/icons";
import { ButtonType } from "@/modules/common/types";

export type NotFoundProps = {
    title: string;
    description: string;
    button: ButtonType;
    icon: ButtonType["icon"];
};

const NotFound = ({ title, description, button, icon }: NotFoundProps) => {
    return (
        <section className="flex flex-col w-full items-center justify-center pb-12 gap-9 text-center bg-primary">
            <header className="flex flex-col gap-9 text-center justify-center items-center px-6">
                <IconByName
                    {...icon}
                    className={
                        icon?.className
                            ? icon.className
                            : "md:-mb-20 -mt-10 -mb-10 size-56 md:size-96"
                    }
                />
                <Typography as="h1">{title}</Typography>
                <Typography
                    as="p"
                    className="text-lg md:text-lg lg:text-lg max-w-[35rem]"
                >
                    {description}
                </Typography>
            </header>
            <Button variant={button.variant} size={button.size} asChild>
                <Link href={button.link}>{button.text}</Link>
            </Button>
        </section>
    );
};

export default NotFound;
