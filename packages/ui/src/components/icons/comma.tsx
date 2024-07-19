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
                d="M21.329 0.000737133H0.646332C0.28969 0.000737133 0 0.290427 0 0.64707V21.3297C0 21.6863 0.28969 21.976 0.646332 21.976H20.6538C20.3538 33.4214 12.2233 41.366 0.646332 41.366C0.28969 41.366 0 41.6557 0 42.0123C0 42.369 0.28969 42.6587 0.646332 42.6587C13.2048 42.6587 21.976 33.8882 21.976 21.329V0.646332C21.976 0.28969 21.6864 0 21.3297 0L21.329 0.000737133ZM1.2934 1.2934H20.6834V20.6834H1.2934V1.2934Z"
                fill="#E1E1E1"
            />
        </svg>
    );
};
