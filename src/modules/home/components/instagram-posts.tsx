"use client";
import type { ImageType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    AutoScroll,
    type AutoScrollOptionsType,
} from "@ui/components/carousel";
import { useRef } from "react";

export interface InstagramPostProps {
    images: ImageType[];
    autoScrollOptions?: AutoScrollOptionsType;
}

const InstagramPosts = ({ images, autoScrollOptions }: InstagramPostProps) => {
    const autoplay = useRef(AutoScroll(autoScrollOptions));
    return (
        <Carousel
            plugins={[autoplay.current]}
            opts={{
                loop: true,
            }}
            className="container max-xl:pl-0 max-xl:pr-0"
        >
            <CarouselContent>
                {images.map(({ _className, ...image }, index) => (
                    <CarouselItem
                        key={index}
                        className="h-52 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                    >
                        <Image {...image} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default InstagramPosts;
