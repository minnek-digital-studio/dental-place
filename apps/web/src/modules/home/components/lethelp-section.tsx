import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType } from "@/modules/common/types";
import { MoveRight } from "@minnek/ui/icons";

export type LetUsHelpSectionProps = {
    title: string;
    description: string;
    button: ButtonType;
    img: ImageType;
    className?: string;
};

const LetUsHelpSection = ({
    title,
    description,
    img,
    button,
    className,
}: LetUsHelpSectionProps) => {
    return (
        <section
            className={cn(
                "flex flex-col rounded-[2rem] md:flex-row bg-primary/40 md:h-[24rem] mt-6 container",
                className,
            )}
        >
            <header className="flex flex-col gap-6 w-full md:w-[60%] p-8 md:p-20 md:pr-10">
                <Typography as="h3">{title}</Typography>
                <Typography as="p" className="flex-1">
                    {description}
                </Typography>
                <Typography as="a" href={button.link} className="font-bold">
                    <Button
                        variant={button.variant}
                        className="gap-2"
                        size={button.size}
                    >
                        <span>{button.text}</span>
                        <MoveRight size={25} />
                    </Button>
                </Typography>
            </header>
            <main className="w-full overflow-visible md:relative flex justify-end">
                <Image
                    {...img}
                    className={cn(
                        "md:absolute md:bottom-0 md:w-100% md:max-w-[45rem] md:h-auto",
                        img.className,
                    )}
                />
            </main>
        </section>
    );
};

export default LetUsHelpSection;
