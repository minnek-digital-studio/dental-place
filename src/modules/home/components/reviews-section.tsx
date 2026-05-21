import ReviewCard, {
    type ReviewCardProps,
} from "@/modules/home/components/review-card";
import { type ButtonVariants } from "@ui/components/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@ui/components/carousel";
import { Typography } from "@ui/components/typography";
import { MoveLeft, MoveRight } from "@ui/components/icons";
import { Button } from "@ui/components/button";
import { renderHTML } from "@/modules/common/utils/sanitize-html";

export type ReviewsSectionProps = {
    title: string;
    description: string;
    items: ReviewCardProps[];
    button?: buttonProps;
};

export type buttonProps = {
    text: string;
    link: string;
    variant: ButtonVariants["variant"];
    size: ButtonVariants["size"];
};

const ReviewsSection = ({
    title,
    description,
    items,
    button,
}: ReviewsSectionProps) => {
    return (
        <section className="flex flex-col gap-9 items-center py-6 container">
            <header className="flex flex-col gap-4 items-center">
                <Typography as="h2" className="text-center">
                    {title}
                </Typography>
                {description && (
                    <div className="text-dark-grey max-w-[25rem] text-center font-noto-sans text-base">
                        {renderHTML(description)}
                    </div>
                )}
                {button?.text && (
                    <Button
                        variant={button.variant}
                        size={button.size}
                        className="w-fit"
                        asChild
                    >
                        <Typography
                            as="a"
                            href={button.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {button.text}
                        </Typography>
                    </Button>
                )}
            </header>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="flex flex-col gap-12 w-full items-center max-w-[30rem] md:max-w-[46rem] lg:max-w-full"
            >
                <CarouselContent>
                    {items.map((item) => (
                        <CarouselItem
                            className="flex justify-center items-center md:basis-1/3 lg:basis-1/4"
                            key={item.author.name}
                        >
                            <ReviewCard {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="flex gap-3">
                    <CarouselPrevious
                        variant="dark"
                        className="static h-auto w-auto p-3"
                    >
                        <MoveLeft />
                    </CarouselPrevious>
                    <CarouselNext
                        variant="dark"
                        className="static h-auto w-auto p-3"
                    >
                        <MoveRight />
                    </CarouselNext>
                </div>
            </Carousel>
        </section>
    );
};

export default ReviewsSection;
