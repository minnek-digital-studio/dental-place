import StarRating from "@/modules/common/components/rating-stars";
import { type Author } from "@/modules/common/types";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@ui/components/avatar";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@ui/components/card";
import { Typography } from "@ui/components/typography";
import { Comma } from "@ui/components/icons";
import { cn } from "@ui/lib/utils";
import type { Icon } from "@/modules/common/types";
import { IconByName } from "@ui/components/icons";

export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    comment: string;
    author: Author;
    rating: number;
    icon?: Icon;
    link?: string;
}

const ReviewCard = ({
    comment,
    author,
    rating,
    className,
    icon,
    link,
    ..._props
}: ReviewCardProps) => {
    return (
        <Card
            className={cn(
                "w-full bg-[#F9F7FF] py-1 relative h-full",
                className,
            )}
        >
            <CardHeader className="px-4 mb-2">
                <div className="flex items-center justify-between">
                    <StarRating rating={rating} />
                    {icon && <IconByName {...icon} />}
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <Typography
                    as={link ? "a" : "p"}
                    className={cn(
                        "line-clamp-[8] text-sm text-black leading-6",
                        link &&
                            "after:content-[''] after:inset-0 after:absolute after:bottom-0 after:w-full",
                    )}
                    {...(link
                        ? {
                              href: link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              "aria-label": "View review",
                          }
                        : {})}
                >
                    {comment}
                </Typography>
            </CardContent>
            <CardFooter className="flex px-4 gap-4 justify-between">
                <Avatar>
                    <AvatarImage {...author.img} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <Typography
                    as="h3"
                    className="text-base lg:text-base font-extrabold"
                >
                    {author.name}
                </Typography>
                <div className="flex flex-1 justify-end -space-x-2 -mx-2">
                    <Comma size={25} />
                    <Comma size={25} />
                </div>
            </CardFooter>
        </Card>
    );
};

export default ReviewCard;
