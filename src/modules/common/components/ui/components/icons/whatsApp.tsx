import type { LucideProps } from "lucide-react";

export const WhatsApp = ({
    size = "24",
    color = "currentColor",
    fill,
    stroke = "1",
    ...props
}: LucideProps) => {
    const id = crypto.randomUUID();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill={fill || color}
            color={color}
            stroke={stroke}
            className="lucide"
            d="M1 10H31V22H1z"
            {...props}
        >
            <g clipPath={`url(#${id}-clip0_551_1077)`}>
                <path
                    d="M1.6 15C1.6 17.4 2.2 19.8 3.4 21.8L1.5 28.9L8.8 27C10.8 28.1 13.1 28.7 15.4 28.7H15.4C23 28.7 29.2 22.5 29.2 15C29.2 11.4 27.7 7.9 25.1 5.3C22.5 2.7 19.1 1.3 15.4 1.3C7.8 1.3 1.6 7.5 1.6 15"
                    fill={`url(#${id}-paint0_linear_551_1077)`}
                />
                <path
                    d="M1.1 15C1.1 17.5 1.8 19.9 3 22.1L1 29.4L8.6 27.4C10.6 28.6 13 29.2 15.4 29.2H15.4C23.3 29.2 29.7 22.8 29.7 15C29.7 11.2 28.2 7.7 25.5 5C22.8 2.3 19.2 0.8 15.4 0.8C7.5 0.8 1.1 7.2 1.1 15ZM5.6 21.7L5.3 21.3C4.1 19.4 3.5 17.2 3.5 15C3.5 8.5 8.8 3.2 15.4 3.2C18.6 3.2 21.5 4.4 23.8 6.7C26 8.9 27.3 11.9 27.3 15C27.3 21.5 21.9 26.8 15.4 26.8H15.4C13.3 26.8 11.2 26.2 9.3 25.1L8.9 24.9L4.4 26L5.6 21.7Z"
                    fill={`url(#${id}-paint1_linear_551_1077)`}
                />
                <path
                    d="M11.8 9.1C11.5 8.5 11.3 8.5 11 8.5C10.8 8.4 10.6 8.4 10.3 8.4C10.1 8.4 9.7 8.5 9.4 8.9C9.1 9.2 8.1 10.1 8.1 11.8C8.1 13.6 9.4 15.3 9.6 15.5C9.8 15.7 12.1 19.4 15.7 20.8C18.7 22 19.3 21.8 20 21.7C20.6 21.7 22.1 20.9 22.4 20.1C22.7 19.2 22.7 18.5 22.58 18.4C22.5 18.2 22.3 18.1 21.9 18C21.5 17.8 19.8 16.9 19.5 16.8C19.1 16.7 18.9 16.6 18.7 17C18.4 17.3 17.7 18.1 17.5 18.4C17.3 18.6 17.1 18.6 16.8 18.5C16.4 18.3 15.2 17.9 13.9 16.7C12.8 15.8 12.1 14.6 11.9 14.2C11.7 13.9 11.9 13.7 12.1 13.5C12.2 13.4 12.4 13.1 12.6 12.9C12.8 12.7 12.8 12.6 12.9 12.3C13.1 12.08 13 11.9 12.9 11.7C12.8 11.5 12.1 9.8 11.8 9.1Z"
                    fill="white"
                />
            </g>
            <defs>
                <linearGradient
                    id={`${id}-paint0_linear_551_1077`}
                    x1="1385.81"
                    y1="2760.88"
                    x2="1385.81"
                    y2="1.3"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1FAF38" />
                    <stop offset="1" stopColor="#60D669" />
                </linearGradient>
                <linearGradient
                    id={`${id}-paint1_linear_551_1077`}
                    x1="1434.98"
                    y1="2859.34"
                    x2="1434.98"
                    y2="0.8"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F9F9F9" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <clipPath id={`${id}-clip0_551_1077`}>
                    <rect
                        width="28.7"
                        height="28.7"
                        fill="white"
                        transform="translate(1 0.8)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
