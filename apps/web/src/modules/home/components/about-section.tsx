import { cn } from "@minnek/ui/lib/utils";
import { Image } from "@/modules/common/components/image";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import type { ButtonType, ImageType } from "@/modules/common/types";
import { MoveRight } from "@minnek/ui/icons";
import Link from "next/link";

export type AboutSectionProps = {
    title: string;
    description?: string;
    button: ButtonType;
    img: ImageType;
    className?: string;
};

const AboutSection = ({
    title,
    description,
    img,
    button,
    className,
}: AboutSectionProps) => {
    return (
        <section className="lg:h-[31rem] container max-xl:pl-0 max-xl:pr-0">
            <div
                className={cn(
                    "flex flex-col md:flex-row h-full bg-primary/40",
                    className,
                )}
            >
                <header className="flex flex-col gap-6 w-full md:w-[47%] p-8 md:p-20 md:pr-10">
                    <Typography as="h2">{title}</Typography>
                    <Typography as="p" className="leading-8 text-dark">
                        {description}
                    </Typography>
                    <Button
                        variant={button.variant}
                        className="gap-2"
                        size={button.size}
                        asChild
                    >
                        <Link
                            href={button.link}
                            className="font-bold w-max"
                            aria-label={button.text}
                        >
                            <Typography as="span" className="text-inherit">
                                {button.text}
                            </Typography>
                            <MoveRight size={25} />
                        </Link>
                    </Button>
                </header>
                <main className="md:w-[53%] w-full overflow-hidden">
                    <Image {...img} />
                </main>
            </div>
        </section>
    );
};

export default AboutSection;
