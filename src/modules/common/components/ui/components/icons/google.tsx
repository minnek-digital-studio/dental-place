import type { LucideProps } from "lucide-react";

export const Google = ({
    size = "24",
    color: _color = "currentColor",
    fill: _fill,
    stroke = "1",
    ...props
}: LucideProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 294 300"
            className="lucide"
            stroke={stroke}
            {...props}
            fill="none"
        >
            <path
                d="M150 122.7V180.82H230.7C227.2 199.5 216.5 215.3 200.59 226L249.3 263.7C277.6 237.55 294 199.1 294 153.4C294 142.8 293 132.5 291.3 122.73L150 122.7Z"
                fill="#4285F4"
            />
            <path
                d="M65.9 178.6L55 187L16.1 217.23C40.8 266.2 91.4 300 150 300C190.5 300 224.45 286.64 249.3 263.7L200.6 226C187.2 235 170.2 240.4 150 240.4C111 240.4 77.9 214.1 66 178.6L65.9 178.6Z"
                fill="#34A853"
            />
            <path
                d="M16.1 82.8C5.9 103 0 125.7 0 150C0 174.3 5.9 197 16.1 217.2C16.1 217.4 66 178.5 66 178.5C63 169.5 61.2 160 61.2 150C61.2 140 63 130.5 66 121.5L16.1 82.8Z"
                fill="#FBBC05"
            />
            <path
                d="M150 59.7C172.1 59.7 191.7 67.4 207.4 82.1L250.4 39.1C224.3 14.9 190.5 0 150 0C91.4 0 40.8 33.7 16.1 82.8L66 121.5C77.9 86 111 59.7 150 59.7Z"
                fill="#EA4335"
            />
        </svg>
    );
};
