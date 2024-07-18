import { type Author } from "@/modules/common/types";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@minnek/ui/components/card";
import { Comma } from "@minnek/ui/icons";
import { cn } from "@minnek/ui/lib/utils";
import { Typography } from "@minnek/ui/components/typography";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@minnek/ui/components/avatar";
import StarRating from "@/modules/common/components/rating-stars";

export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    comment: string;
    author: Author;
    rating: number;
}

const ReviewCard = ({
    comment,
    author,
    rating,
    className,
    ...props
}: ReviewCardProps) => {
    return (
        <Card className={cn("w-full bg-[#F9F7FF] py-1", className)}>
            <CardHeader className="px-4 mb-2">
                <StarRating rating={rating} />
            </CardHeader>
            <CardContent className="px-4">
                <Typography
                    as="p"
                    className="line-clamp-[8] text-sm text-black leading-6"
                >
                    {comment}
                </Typography>
            </CardContent>
            <CardFooter className="flex px-4 gap-4 justify-between">
                <Avatar>
                    <AvatarImage {...author.img} />
                    <AvatarFallback>{author.name[0]}</AvatarFallback>
                </Avatar>
                <Typography as="h4" className="text-base">
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
