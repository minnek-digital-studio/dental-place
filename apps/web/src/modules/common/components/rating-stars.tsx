import { Star } from "@minnek/ui/icons";

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={index}
                    size={17}
                    fill={`${index < rating ? "#F35625" : "#D1D5DB"}`}
                    className={`${
                        index < rating ? "text-[#F35625]" : "text-gray-300"
                    }`}
                />
            ))}
        </div>
    );
};

export default StarRating;
