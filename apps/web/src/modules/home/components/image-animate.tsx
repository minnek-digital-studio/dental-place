"use client";

import { Image, ImageProps } from "@/modules/common/components/image";
import { useEffect, useRef } from "react";

interface ImageAnimateProps extends ImageProps {
    speed?: number;
    direction?: "up" | "down";
    position?: number;
}

const ImageAnimate = ({
    speed = 5,
    direction = "up",
    position = 0,
    src,
    ...imgProps
}: ImageAnimateProps) => {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current) return;
            const parent = imageRef.current.parentElement;
            if (!parent) return;

            const { top: topParent, height: heightParent } =
                parent.getBoundingClientRect();

            const parentVisible =
                topParent + heightParent > 0 && topParent < window.innerHeight;
            heightParent;
            if (!parentVisible) return;

            const { top, height } = imageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const relativeScroll = (windowHeight - top - height) / windowHeight;
            if (relativeScroll >= 0 && relativeScroll <= 1) {
                const positionY =
                    direction === "up"
                        ? position + relativeScroll * speed
                        : position - relativeScroll * speed;

                imageRef.current.style.transform = `translateY(${positionY}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [speed, direction]);

    return <Image ref={imageRef} {...imgProps} src="/images/about-us.webp" />;
};

export default ImageAnimate;
