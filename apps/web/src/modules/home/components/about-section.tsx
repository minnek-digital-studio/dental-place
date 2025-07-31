import type { ButtonType, ImageType } from "@/modules/common/types";
import ImageAnimate from "@/modules/home/components/image-animate";
import { Button } from "@minnek/ui/components/button";
import { Typography } from "@minnek/ui/components/typography";
import { MoveRight } from "@minnek/ui/icons";
import { cn } from "@minnek/ui/lib/utils";
import Link from "@/modules/common/components/link";

export type AboutSectionProps = {
    title: string;
    description?: string;
    descriptionRich?: string;
    button: ButtonType;
    img: ImageType;
    otherImage?: ImageType;
    className?: string;
};

const AboutSection = ({
    title,
    description,
    descriptionRich,
    img,
    otherImage,
    button,
    className,
}: AboutSectionProps) => {
    const descriptionRichHTML = { __html: descriptionRich || "" };

    return (
        <section className=" container max-xl:pl-0 max-xl:pr-0">
            <div className={cn("flex flex-col md:flex-row h-full", className)}>
                <header className="flex flex-col gap-6 w-full md:w-[50%] p-8 md:p-20 md:pr-10 justify-center">
                    <Typography as="h2" className="font-light">
                        {title}
                    </Typography>

                    {descriptionRichHTML.__html === "" ? (
                        <Typography as="p" className="leading-8 text-dark">
                            {description}
                        </Typography>
                    ) : (
                        <div
                            dangerouslySetInnerHTML={descriptionRichHTML}
                            className="text-base leading-8 text-dark font-noto-sans"
                        ></div>
                    )}

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
                <main className="md:w-[50%] w-full overflow-hidden flex gap-5 justify-center max-md:px-4">
                    <picture className="overflow-hidden rounded-md py-4">
                        <ImageAnimate
                            {...img}
                            direction="down"
                            position={15}
                            speed={50}
                            className="overflow-hidden rounded-md aspect-[2/3]"
                        />
                    </picture>
                    <picture className="overflow-hidden rounded-md py-14 lg:py-24">
                        <ImageAnimate
                            {...otherImage}
                            direction="up"
                            position={-25}
                            speed={50}
                            className="overflow-hidden rounded-md aspect-[2/3]"
                        />
                    </picture>
                </main>
            </div>
        </section>
    );
};

export default AboutSection;
