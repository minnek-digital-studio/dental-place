"use client";
import type { ImageType } from "@/modules/common/types";
import { Image } from "@/modules/common/components/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    Autoplay,
} from "@minnek/ui/components/carousel";
import { useRef } from "react";
import { cn } from "@minnek/ui/lib/utils";

export interface InstagramPostProps {
    images: ImageType[];
}

const InstagramPosts = ({ images }: InstagramPostProps) => {
    const autoplay = useRef(
        Autoplay({
            playOnInit: true,
        }),
    );
    return (
        <Carousel
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {images.map(({ className, ...image }, index) => (
                    <CarouselItem key={index} className=" basis-1/4">
                        <Image {...image} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default InstagramPosts;
