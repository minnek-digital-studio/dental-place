import type { LucideProps } from "lucide-react";

export const Comma = ({
    size = "24",
    color = "currentColor",
    fill,
    stroke = "1",
    ...props
}: LucideProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 22 43"
            fill={fill || color}
            color={color}
            stroke={stroke}
            className="lucide"
            {...props}
        >
            <path
                d="M21.3 0H0.6C0.3 0 0 0.3 0 0.6V21.3C0 21.7 0.3 22 0.6 22H20.7C20.4 33.4 12.2 41.4 0.6 41.4C0.3 41.4 0 41.7 0 42C0 42.4 0.3 42.7 0.6 42.7C13.2 42.7 22 33.9 22 21.3V0.6C22 0.3 21.7 0 21.3 0L21.3 0ZM1.3 1.3H20.7V20.7H1.3V1.3Z"
                fill="#E1E1E1"
            />
        </svg>
    );
};
